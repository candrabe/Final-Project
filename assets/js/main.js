(function($) {
    "use strict"; 

/*--
	Menu Sticky
-----------------------------------*/
var windows = $(window);
var sticky = $('.header-sticky')
windows.on('scroll', function() {
	var scroll = windows.scrollTop();
	if (scroll < 250) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});

/*--
	Mobile Menu
------------------------*/
var multiPageMenu = $('.multi-page-menu');
multiPageMenu.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu.multi-page',
    meanMenuClose: '<i class="ion-android-close"></i>',
    meanMenuOpen: '<i class="ion-navicon"></i>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '30px',
});
var onePageMenu = $('.one-page-menu');
onePageMenu.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu.one-page',
    meanMenuClose: '<i class="ion-android-close"></i>',
    meanMenuOpen: '<i class="ion-navicon"></i>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '30px',
    onePage: true,
});

/*--
	One Page Menu
-----------------------------------*/
var headerSection = $('.header-section');
var TopOffsetId = headerSection.height() - 1;
onePageMenu.onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});

/*-- 
    Menu Toggle
-----------------------------------*/
var menuSection = $('.menu-section');
var menuToggle = $('.menu-toggle');
menuToggle.on('click', function(){
    if( headerSection.hasClass('menu-open') ) {
        headerSection.removeClass('menu-open');
        $(this).html('<i class="ion-android-menu"></i>');
        menuSection.removeClass('active');
    }else{
        headerSection.addClass('menu-open');
        $(this).html('<i class="ion-android-close"></i>');
        menuSection.addClass('active');
    }
});

/*-- 
    Creative Menu Close On Link Click
-----------------------------------*/
$('.cr-menu ul li a').on('click', function(){
    if( headerSection.hasClass('menu-open') ) {
        headerSection.removeClass('menu-open');
        menuToggle.html('<i class="ion-android-menu"></i>');
        menuSection.removeClass('active');
    }
});

/*-- 
    Search Toggle
-----------------------------------*/
var headerSearch = $('.header-search');
var searchToggle = $('.search-toggle');
searchToggle.on('click', function(){
    if( headerSearch.hasClass('open') ) {
        headerSearch.removeClass('open');
        $(this).html('<i class="ion-android-search"></i>');
    }else{
        headerSearch.addClass('open');
        $(this).html('<i class="ion-android-close"></i>');
    }
});

/*-- 
    Background Parallax
-----------------------------------*/
var parallaxWindow = $('.parallax-window');
parallaxWindow.parallax();

/*--
    Smooth Scroll
-----------------------------------*/ 
$('[data-scroll], .mobile-menu.one-page .mean-nav ul li a').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: - TopOffsetId,
	});
});
    

})(jQuery);




