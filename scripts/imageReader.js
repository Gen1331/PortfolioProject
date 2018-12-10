var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("#imgRead").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});