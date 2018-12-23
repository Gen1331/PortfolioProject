var title = ["Tbilisi","Batumi","Gori"];
$(document).ready(function(){
    $('#title').html("~Welcome to Georgia~");
    $('#mycarousel').on('slide.bs.carousel', function(){            
        var t = $(this).find("div").find(".active").find('img').attr('id');
        $('#title').html("~Welcome to " + title[t-1] + "~");
    });        
});
