var title = ["Korbuleti","Tbilisi","Alaverdi","Batumi"];


$(document).ready(function(){
    //Set the carousel slide interval for 5 sec...
    $('#mycarousel').carousel({
        interval: 6000
    });

    //Initialization: get the image id, carousel object and display the title of the first image
    var id = $(this).find("div").find(".active").find('img').attr('id');
    var crsl = $(this);
    $('#title').html("~Welcome to " + title[0] + "~"); 
    
    //Run the carousel automatically...
    $('#mycarousel').on('slide.bs.carousel', function(){            
        id = $(this).find("div").find(".active").find('img').attr('id');            
        if(id == title.length){
            $('#title').html("~Welcome to " + title[0] + "~");           
        }else{
            $('#title').html("~Welcome to " + title[id] + "~");            
        }
    });  

    //Run the carousel manually...  
    $('.carousel-control-prev').on('click',function(){
        $('#mycarousel').off('slide.bs.carousel');              
        id = crsl.find("div").find(".active").find('img').attr('id');
        if (id == 1){
            id = title.length;            
            $('#title').html("~Welcome to " + title[title.length-1] + "~");           
        }else{
            id--;            
            $('#title').html("~Welcome to " + title[id-1] + "~"); 
        }          
    }); 
   
});
