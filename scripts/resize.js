(function($) {   
    // $('#logo').css('width','355');
    // $('.nav-ul li a').css('font-size',$(window).innerWidth()/55 + 'px');
    $(".carousel").css('height', $(window).width()/1.4 + 'px');
    console.log("type");
    $(window).resize(function(){
        // $('#logo').css('width',$(window).innerWidth()/5);
        // $('.nav-ul li a').css('font-size',$(window).innerWidth()/55 + 'px');
        $(".carousel").css('height', $(window).width()/1.4 + 'px'); 
        
    }); 
})(jQuery);