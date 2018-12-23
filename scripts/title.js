var title = ["Korbuleti","Tbilisi","Alaverdi","Batumi"];
$(document).ready(function(){
    $('#title').html("~Welcome to " + title[0] + "~");
    $('#mycarousel').on('slide.bs.carousel', function(){            
        var id = $(this).find("div").find(".active").find('img').attr('id');        
        if(id == title.length){
            $('#title').html("~Welcome to " + title[0] + "~");           
        }else{
            $('#title').html("~Welcome to " + title[id] + "~");            
        }
    });        
});
