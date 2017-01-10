$(function () {
    // reference time to count stopwatch from
    // if ts[i] is not 0, means stopwatch i is running
    var t0s = [0, 0, 0];
    // total time on stopwatch.
    var tts = [0, 0, 0];
    // key codes to start/stop stopwatches
    var keys = [113, 119, 101];
    var nstopwatches = 3;


    function timer(stopwatch) {
        if (t0s[stopwatch] == 0) {
            // stopwatch is stopped,  start it
            t0s[stopwatch] = Date.now();
        }
        else {
            // stopwatch is going, record time and stop it.
            tts[stopwatch] += Date.now() - t0s[stopwatch];
            t0s[stopwatch] = 0;
        }
    }

    $("#button0").click(function() {timer(0);});
    $("#button1").click(function() {timer(1);});
    $("#button2").click(function() {timer(2);});


    function reset() {
        for (var i = 0; i < nstopwatches; i++) {
            t0s[i] = 0;
            tts[i] = 0;
        }
    }
    $("#resetbutton").click(reset);


    $(document).keypress(function (event) {
        for (var i = 0; i < nstopwatches; i++) {
            if (event.charCode == keys[i]) {
                timer(i);
                break;
            }
        }

        if (event.charCode == 114)
            reset();
    });


    window.setInterval(function() {
        for (var i = 0; i < nstopwatches; i++) {
            var time = tts[i];
            if (t0s[i] > 0) {
                time += Date.now() - t0s[i];
            }
            time /= 1000;
            $("#time" + i).text(time.toFixed(3));
        }
    }, 80);
});
