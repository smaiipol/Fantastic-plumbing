/*------------ animate.reset  Start ------------*/
new WOW().init();
/*------------ animate.reset  End ------------*/

jQuery(document).ready(function($) {
	/*------------ slick Start ------------*/
	if($('.slide-container').length > 0) {
		$('.slide-container').slick({
			dots: false,
			arrows: false,
			infinite: true, //loop
			speed: 500,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 5000,
			pauseOnHover: false, //mouse hover
			draggable: false, //mouse pull
			responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			}, {
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					draggable: true,
				}
			}]
		});
	}
	/*------------ slick End ------------*/

	/*------------ animate to top Start ------------*/
	$('footer a').on('click', function() {
		$("body,html").animate({
			scrollTop: $("#header").offset().top
		}, 1000);
	});
	/*------------ animate to top End ------------*/

	/*------------ <a> hover Start ------------*/
	document.body.addEventListener('touchend', function() {});
	/*------------ <a> hover End ------------*/

	resize();
	$(window).resize(function() {
		resize()
	});

	function resize() {
		if($(window).width() < 1000) {
			$("#map").height($("#map").width());
		} else {
			$("#map").height(470);
		}
	}

});

function circle() {
	if(jQuery(window).width() <= 414) {
		citymap = {
			Australia: {
				center: {
					lat: -28.6231761,
					lng: 153.601977
				},
				population: 91000
			}
		};
	} else {
		citymap = {
			Australia: {
				center: {
					lat: -28.6231761,
					lng: 153.601977
				},
				population: 261000
			}
		};
	}
}

jQuery(function() {
	if(jQuery('#map').length > 0) {
		circle();
		initMap();
	};
});

jQuery(window).resize(function() {
	circle();
	initMap();
});

/*------------ map Start ------------*/
function initMap() {
	var styleArray = [{
		"featureType": "landscape",
		"stylers": [{
			"color": "#f1f1f1"
		}]
	}, {
		"featureType": "poi",
		"stylers": [{
			"color": "#f1f1f1"
		}]
	}]

	var lantMap, LngMap;
	lantMap = -28.6231761;
	LngMap = 153.601977;

	// Create the map.
	var mapOptions = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: new google.maps.LatLng(lantMap, LngMap),
		styles: styleArray,
		disableDefaultUI: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		center: {
			lat: -28.6231761,
			lng: 153.601977
		},
	});

	// Construct the circle for each value in citymap.
	// Note: We scale the area of the circle based on the population.
	for(var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
			strokeColor: '#619df9',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#619df9',
			fillOpacity: 0.6,
			map: mapOptions,
			center: citymap[city].center,
			radius: Math.sqrt(citymap[city].population) * 100
		});
	}
}
/*------------ map End ------------*/