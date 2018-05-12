$(() => {
	"use strict"

	//set Main nav item to highlighted
	$('#main-nav').addClass('active-nav');

	var topoffset=0
	var wheight = $(window).height()*0.9; //height of window

	//set height of main page 
	$('.page#main').css('height', wheight);

	//adjust height of main page on window resize
	$(window).resize(function() {
		wheight = $(window).height()*0.9; //get the height of the window
		$('.page#main').css('height', wheight); //set to window tallness  
	});

})