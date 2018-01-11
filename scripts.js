/******************
	@ Prefect JS
********************/


'use strict';

$(window).on('load', function() { 
    setTimeout(function(){
        $('body').addClass('loaded');
    },3000)
});


(function($) {

	/*------------------
		Site Navigation
	--------------------*/
	var navMenu = $('.menu-list')
		navMenu.onePageNav();
	$(window).on('scroll resize',function(e) {
		var introH = $('.intro-section').height() - 90;
		if ($(this).scrollTop() > introH) {
			$('.header-section').addClass('sticky');
		}else{
			$('.header-section').removeClass('sticky');
		}
		e.preventDefault();
	});

	$('.nav-switch').on('click', function(event) {
		$('.mainmenu').toggleClass('active');
		$(this).toggleClass('active');
		event.preventDefault();
	});


	$('.responsive').on('click', function(event) {
		$('.menu-list').toggleClass('nav-show');
		$('.menu-list li a').on('click', function(event) {
			$('.menu-list').removeClass('nav-show');
			event.preventDefault();
		});
		event.preventDefault();
	});


	/*------------------
		Intro Title
	--------------------*/
	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= 200) {
			$(".intro-content").addClass("hideup");
		}
		else {
			return $(".intro-content").removeClass("hideup");
		}
	});


	/*------------------
		Magnific Popup
	--------------------*/
	$('.work-item').magnificPopup({
		type:'image',
		gallery:{enabled:true},
		zoom:{enabled: true, duration: 300}
	});

})(jQuery);


	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();

