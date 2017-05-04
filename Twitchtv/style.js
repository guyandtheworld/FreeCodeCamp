$(document).ready(function(){
    function twitch(){
        var url = ["https://api.twitch.tv/kraken/users/","?client_id=dyqe90703142qejdl5d1j8ujyq6mii"];
        var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

        for(var i = 0; i<users.length; i++){
            $.getJSON(url[0]+ users[i] +url[1], function(data){
                var content = "";
                content += "<div class='ind'><div class='row col-xs-12' ><img src='" + data.logo + "' class='icon'><a href='";
                content += "https://www.twitch.tv/" + data.display_name + "' class='link'  target='_blank'><h2 class='title'>";
                content += data.display_name + "</h2></a></div><br><p class='para center-block'>" + data.bio + "</p></div>";
                console.log(content);
                $(".square").append(content);
            });
        }
    }
    twitch();
});