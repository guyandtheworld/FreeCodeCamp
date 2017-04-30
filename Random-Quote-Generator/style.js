$(document).ready(function() {
  $("#change").on("click", function(){
   
$.ajax({
       type: "POST",
       url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
       dataType: "json",
       success: function (response) {
            $('h1').text(response.quote);
            $('cite').text(response.author)
            console.log(response);
       },
       beforeSend: setHeader
   });
    function setHeader(xhr) {
       xhr.setRequestHeader("X-Mashape-Key", "hxhaxGcnIZmshmIwyYqhpfVrUUM4p1AxBrhjsnGSCNQY3PEMo8");
       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       xhr.setRequestHeader("Accept", "application/json");
    }
  });

  $("#tweet").on("click", function(){
        var currentQuote = $("#quote").text();
        var currentAuthor = $("#author").text();
        console.log(currentQuote+currentAuthor)
        $('#tweet-quote').attr('href',
         'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  });
});