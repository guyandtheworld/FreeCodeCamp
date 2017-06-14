function calc(digits, operants){
    var res;
    console.log(digits, operants);
    res = digits.reduce(function(a,b){
        var op = 0;

        var temp = map[operants[op]](a,b);
        op++;
        return temp;
    });
    $("h1", ".result").text(res);
}

var map = {
    "+": function(a,b){return a+b;},
    "-": function(a,b){return a-b;},
    "*": function(a,b){return a*b;},
    "/": function(a,b){return a%b;},
    "%": function(a,b){console.log(a/b.toFixed(5));return a/b.toFixed(5);},
    "^": function(a,b){return Math.exp(a,b)},
    };

$(document).ready(function() {
    $('.display').keydown(function (e){
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 110, 187, 189, 190, 191]) !== -1||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 82 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 53 && (e.shiftKey === true || e.metaKey === true)) ||
            (e.keyCode == 54 && (e.shiftKey === true || e.metaKey === true)) ||
            (e.keyCode == 56 && (e.shiftKey === true || e.metaKey === true)) ||
            (e.keyCode == 57 && (e.shiftKey === true || e.metaKey === true)) ||
            (e.keyCode == 48 && (e.shiftKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <=39)){
            return;
        }

        if  ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96||e.keyCode >105)){
            e.preventDefault();
        }

        if(e.keyCode == 13){
            var val = $(".display").val();
            var temp = eval(val);
            if  (!isNaN(parseFloat(temp))&&isFinite(temp)){
                $("h1", ".result").text(temp);
            }
            else{
                $("h1", ".result").text("Something went wrong check your syntax");
            }
        }
    });

    var modal = document.getElementById('myModal');

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});
