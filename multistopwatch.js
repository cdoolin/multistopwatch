$(function () {
    var t0 = 0;
    var tt0 = 0;
    
    function timer0() {
        if (t0 == 0) {
            t0 = Date.now();
        }
        else {
            tt0 += Date.now() - t0;
            t0 = 0;
        }
    }
    
    var t1 = 0;
    var tt1 = 0;
    
    function timer1() {
        if (t1 == 0) {
            t1 = Date.now();
        }
        else {
            tt1 += Date.now() - t1;
            t1 = 0;
        }
    }
    
    var t2 = 0;
    var tt2 = 0;
    
    function timer2() {
        if (t2 == 0) {
            t2 = Date.now();
        }
        else {
            tt2 += Date.now() - t2;
            t2 = 0;
        }
    }
    
    function reset() {
        t0 = 0;
        tt0 = 0;
        t1 = 0;
        tt1 = 0;
        t2 = 0;
        tt2 = 0;
    }
    
    $("#button0").click(timer0);
    $("#button1").click(timer1);
    $("#button2").click(timer2);
    
    $("#resetbutton").click(reset);
    
    $(document).keypress(function (event) {
        if (event.charCode == 113)
            timer0();
        if (event.charCode == 119)
            timer1();
        if (event.charCode == 101)
            timer2();
        if (event.charCode == 114)
            reset();
    });
    
    
    window.setInterval(function() {
        var time = tt0;
        if (t0 > 0) {
            time += Date.now() - t0;
        }
        time /= 1000;
        $("#time0").text(time.toFixed(3));
        
        var time = tt1;
        if (t1 > 0) {
            time += Date.now() - t1;
        }
        time /= 1000;
        $("#time1").text(time.toFixed(3));
        
        var time = tt2;
        if (t2 > 0) {
            time += Date.now() - t2;
        }
        time /= 1000;
        $("#time2").text(time.toFixed(3));
    }, 80);
});