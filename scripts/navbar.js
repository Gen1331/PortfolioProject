$(document).ready(function(){
    $('.menu').click(function(){
        $('ul').toggleClass('active'); 

    });
    window.onresize = function() { 
        if ($(window).width() < 900){
            $('.my-row').removeClass('align-items-center').addClass('align-items-start');  
            $('.my-col').removeClass('col-3');
            if($(window).width() < 400){
                $('div.toggle').hide();                
            }    
               
        }else{
            $('.my-row').removeClass('align-items-start').addClass('align-items-center');
            $('.my-col').addClass('col-3');
            $('ul').removeClass('active');
            if ($('div.toggle').is(":hidden")){
                $('div.toggle').show();
            }
        };
    };
});