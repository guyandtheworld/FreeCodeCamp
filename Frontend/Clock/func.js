function timer(minutes){
    var now = minutes*60;
    var x = setInterval(function(){
            if(now==0){clearInterval(x);}
            now--;
            var text = "Minutes: " + Math.floor(now/60) + " Seconds: " + now%60;
            $("h2", ".countdown").text(text);
        },
        1000);

}

$(document).ready(function() {
    $(".awetton-center").click(function(){
        var start = parseInt($(".inputton-left").val());
        var brk = parseInt($(".inputton-right").val());
        if (isNaN(start) || isNaN(brk)){
            alert("Enter the time correctly");
        }
        $(".layer-2").css("display", "none");
        $(".layer-clock").css("display", "block");
        $(".awetton-center").css("display", "none");
        $(".awetton-left").css("display", "block");
        $(".awetton-right").css("display", "block");
        timer(start);
    });
});