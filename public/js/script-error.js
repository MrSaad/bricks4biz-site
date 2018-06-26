$(function(){
	"use strict"

	var wheight = $(window).height(); //height of window

	//set height of main page 
	$('#error').css('height', wheight);

	//adjust height of main page on window resize
	$(window).resize(function() {
		wheight = $(window).height(); //get the height of the window
		$('#error').css('height', wheight); //set to window tallness  
	});

});