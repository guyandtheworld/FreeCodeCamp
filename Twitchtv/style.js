$(document).ready(function(){

    function weatherAPI($city, $temp){
        var url_start = "http://api.openweathermap.org/data/2.5/weather?q=";
        var uid = "4c7a00a8818a319e3d11c509862a43c2";
        var url = url_start+$city+"&appid="+uid;

        $.getJSON(url, function(data){
            var country = data.sys.country;
            var temperature = data.main.temp;
            var humidity = data.main.humidity;
            var wind = data.wind.speed;
            var feel = data.weather["0"].main;
            if ($temp=="celcius"){
                temperature -= 273;
            }
            else{
                temperature = temperature*(9/5)-459.67;
            }
            temperature = (temperature).toFixed(0);
            $("#city_c").text($city+", ");
            $("#city_d").text(country+", ");
            $("#city_temp").text(temperature + " degrees");
            $("#city_val").text(feel);
            $("#city_humidity").text("Humidity: "+humidity+"  ");
            $("#city_wind").text("Wind: "+wind);
        });

    }

    $(".submit").on("click", function(){
        var $city = $("#city").val();
        if($city===""){
            alert("Enter a City!!!!!");
        }
        else{
            var $temp = $('input[name=temp]:checked').val();
            weatherAPI($city, $temp);
        }
    });
});