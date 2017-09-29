$(document).ready(function(){
    for(var i=1; i<=151; i++){   
        var link = "https://pokeapi.co/api/v2/pokemon/"+i+"/";
        $.get(link, function(res) {
            var pic = (res["sprites"]["front_default"]);
            $("#main").append("<img id="+(res["id"])+" src='"+pic+"'alt='Raichu'>")
        }, "json");
    }
    $(document).on("click", "img", function(){
        var num=$(this).attr("id");    
        var link = "https://pokeapi.co/api/v2/pokemon/"+num+"/"
        $.get(link, function(res) {
            var pic = (res["sprites"]["front_default"]);
            $("#name").html(("<h1>"+(res["name"])+"</h1>"));
            $("#sprite").html("<img src="+pic+">");
            var html_str = "";
            html_str += "<h4>Types</h4>";
            html_str += "<ul>"; 
            for(var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>";
            }
            console.log(res.types[0].name);
            html_str += "</ul>";
            $("#type").html("<h4"+html_str+"</h4>")
            $("#height").html(("<h4>Height</h4><h4>"+(res["height"])+"</h4>"));
            $("#weight").html(("<h4>Weight</h4><h4>"+(res["weight"])+"</h4>"));
        }, "json");
    })

});