(function($) { 
    $('.navbar-nav li a, navbar-text a').css('font-size',$(window).innerWidth()/42 + 'px');
    $('.carousel').css('height', $(window).width()/1.4 + 'px');
    $('.map').css('width', ($(window).width() - 20) + 'px');    
    $(window).resize(function(){       
        $('.navbar-nav li a, navbar-text a').css('font-size',$(window).innerWidth()/42 + 'px');
        $('.carousel').css('height', $(window).width()/1.4 + 'px'); 
        $('.map').css('width', ($(window).width() - 20) + 'px');        
    }); 
})(jQuery);