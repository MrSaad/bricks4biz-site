$(() => {
	"use strict"

	//set Main nav item to highlighted
	$('#main-nav').addClass('active-nav');

	var topoffset=0
	var wheight = $(window).height(); //height of window

	//set height of main page 
	$('.page#main').css('height', wheight);

	//adjust height of main page on window resize
	$(window).resize(function() {
		wheight = $(window).height(); //get the height of the window
		$('.page#main').css('height', wheight); //set to window tallness  
	});

	//add in-body to nav when page scrolls
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 20) {
		    $('nav').addClass('inbody');
		} else {
		    $('nav').removeClass('inbody');
		}
	});

	//Use smooth scrolling when clicking on navigation
	$('a').click(function() {
	    if (location.pathname.replace(/^\//,'') === 
			this.pathname.replace(/^\//,'') && 
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2
		        }, 500);
		    	return false;
			} //target.length
	    } //click function
	}) //smooth scrolling
})