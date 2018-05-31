$(() => {
	"use strict"

	var areaClicked = "";
	var modalHtml = "";

	// check if mobile
	var isMobile = false;
	if (/Mobi/.test(navigator.userAgent)) {
	    isMobile = true;
	}

	//add in-body to nav when page scrolls
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 20) {
		  $('nav').addClass('inbody');
		} else {
		  $('nav').removeClass('inbody');
		}
	});

	function createModalHtml(arr){
		var modalHtml = "";

		if (arr.length < 1 || arr == undefined){
			modalHtml += `<div class="single-contact">
				<h2>No Contact Available</h2>
			</div>`
		}

		arr.forEach(obj => {
			modalHtml += `<div class="single-contact">
				<h2>${obj.person}</h2>
				<h3>${obj.city}</h3>
				<div class="modal-contact-info">
					<div id="phone"><img src="img/ic_phone_black_24px.svg"/><a href="tel:${obj.phone}">${obj.phone}</a></div>
					<div id="email"><img src="img/ic_email_black_24px.svg"/><a href="mailto:${obj.email}">${obj.email}</a></div>
				</div>
			</div>`
		})

		return modalHtml;
	}

	function fetchModalInfo(country, code, region){
		areaClicked = region+", "+country;
		fetch('/locdata/'+code)
			.then(res => res.json())
			.then(json => {
				modalHtml = createModalHtml(json);
				$('#loc-modal').modal();
			});
	}

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
		onRegionOver: function(event, code, region){
			console.log(code+" - "+region);
			if (isMobile){
				event.preventDefault();
				fetchModalInfo("Canada", code, region);
			}
		},
		onRegionClick: function(event, code, region){
			event.preventDefault();
			fetchModalInfo("Canada", code, region);
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
		onRegionOver: function(event, code, region){
			console.log(code+" - "+region);
			if (isMobile){
				event.preventDefault();
				fetchModalInfo("USA", code, region);
			}
		},
		onRegionClick: function(event, code, region){
			event.preventDefault();
			fetchModalInfo("USA", code, region);
		}
	});

	// Add appropriate contact info to displayed modal
	$('#loc-modal').on('show.bs.modal', function (event) {
		$(".modal-title h2").text(areaClicked);
		$(".modal-body").html(modalHtml);
	});

});