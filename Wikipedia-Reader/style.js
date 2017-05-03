$(document).ready(function(){

    $('.search').on("click", function(){
        var item = $("#search_field").val();
        var items_url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch="+ item.split(" ").join("%20") +"&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max" 
        var display_url = "https://en.wikipedia.org/?curid=";
        var content = "";
        var times = 0;
        $.ajax({
            url: items_url,
            dataType: "jsonp",
            success: function(data) {
                $("#search_field").remove();
                $(".search").remove();
                $(".random").remove();
                $(".topic").remove();
                $.each(data.query.pages, function(index, element){
                    content += "<div id='items' class='container'><a href = '"+ display_url + element.pageid;
                    content += "' style='text-decoration: none; display: inline;' class='center-block' target='_blank'><h2 style='color: #11f;'>" + element.title;
                    content +=  "</h2></a><p style='color: #444;' class='center-block'>" + element.extract + "</p></div>";
                    $(".square").append(content);
                    times++;
                });
            }
          });
    });
});