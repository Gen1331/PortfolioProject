(function($) {   
    // $('#logo').css('width','355');
    $('.navbar-nav li a').css('font-size',$(window).innerWidth()/55 + 'px');
    $('.carousel').css('height', $(window).width()/1.4 + 'px');
    $('.map').css('width', ($(window).width() - 50) + 'px');    
    $(window).resize(function(){
        // $('#logo').css('width',$(window).innerWidth()/5);
        $('.navbar-nav li a').css('font-size',$(window).innerWidth()/55 + 'px');
        $('.carousel').css('height', $(window).width()/1.4 + 'px'); 
        $('.map').css('width', ($(window).width() - 50) + 'px');        
    }); 
})(jQuery);