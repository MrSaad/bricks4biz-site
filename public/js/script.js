$(() => {
	"use strict"
	
	//add in-body to nav when page scrolls
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 20) {
		    $('nav').addClass('inbody');
		} else {
		    $('nav').removeClass('inbody');
		}
	});
})