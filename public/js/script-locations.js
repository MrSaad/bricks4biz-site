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

	// USA Map
	$('#usa-map').vectorMap({
		map: 'usa_en',
		enableZoom: false,
		showTooltip: true,
		selectedColor: null,
		backgroundColor: null,
		hoverColor: '#0079c1',
		borderColor: '#0079c1',
		color: '#0079c122',
		onRegionClick: function(event, code, region){
			event.preventDefault();
			console.log(code+': '+region);
		}
	});

	// Canada Map
	$('#can-map').vectorMap({
		map: 'canada_en',
		enableZoom: false,
		showTooltip: true,
		selectedColor: null,
		backgroundColor: null,
		hoverColor: '#d21245',
		borderColor: '#d21245',
		color: '#d2124522',
		onRegionClick: function(event, code, region){
			event.preventDefault();
			console.log(code+': '+region);
		}
	});

});