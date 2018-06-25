$(() => {
	"use strict"

	//set Main nav item to highlighted
	$('#main-nav').addClass('active-nav');

	// percentage of full page the main page covers
	var pageCover = 1;

	var topoffset=0
	var wheight = $(window).height()*pageCover; //height of window

	//set height of main page 
	$('.page#main').css('height', wheight);

	//adjust height of main page on window resize
	$(window).resize(function() {
		wheight = $(window).height()*pageCover; //get the height of the window
		$('.page#main').css('height', wheight); //set to window tallness  
	});


	//rotate cog on scroll
	var bodyHeight = $(window).height();
	var rotSpeed = 0.3;

	$(window).scroll(function() {
	    $('.gear-cw').css({
	        'transform': 'rotate(' + ($(this).scrollTop() / bodyHeight * 360 * rotSpeed) + 'deg)'
	    });
	    $('.gear-ccw').css({
	        'transform': 'rotate(' + (-1 * $(this).scrollTop() / bodyHeight * 360 * rotSpeed) + 'deg)'
	    });
	});

})