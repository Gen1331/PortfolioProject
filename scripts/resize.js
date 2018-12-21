(function($) {   
    $('#logo').css('width','355');
    $('.nav-ul li a').css('font-size',$(window).innerWidth()/55 + 'px');
    $(".carousel-content").css("font-size", $(window).innerWidth()/20 + 'px');
    $(window).resize(function(){
        $('#logo').css('width',$(window).innerWidth()/5);
        $('.nav-ul li a').css('font-size',$(window).innerWidth()/55 + 'px');
        $(".carousel-content").css("font-size", $(window).innerWidth()/20 + 'px'); 
    }); 
})(jQuery);