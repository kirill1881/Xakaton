(function ($) {

	"use strict";

	/*
	======================================
		Slider & Slider Animation Init
	======================================
	*/
	(function() {

		var saastraceSwiper = new Swiper ('.saastrace-slider', {
			loop: true,
			autoplay: {
				delay: 7000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">0' + (index + 1) + '</span>';
				},
			},
		});


		saastraceSwiper.on( 'transitionStart', function() {


			var $activeLeftH3El	= jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper h2'),
			$lefth3El			= jQuery('.single-saastrace-slider .slider-text-wrapper h2');
			
			if( ! $activeLeftH3El.hasClass('animation-loaded') ) {
				jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper h2', function() {
					$lefth3El.removeClass('animation-loaded');
					$activeLeftH3El.addClass('animation-loaded');
				});
			}


			var $activeLeftH4El	= jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper h5'),
			$leftH4El			= jQuery('.single-saastrace-slider .slider-text-wrapper h5');

			if( ! $activeLeftH4El.hasClass('animation-loaded') ) {
				jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper h4', function() {
					$leftH4El.removeClass('animation-loaded');
					$activeLeftH4El.addClass('animation-loaded');
				});
			}


			var $activeBtnEl	= jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper .btn-generic a span'),
			$btnEl				= jQuery('.single-saastrace-slider .slider-text-wrapper .btn-generic a span');
			
			if( ! $activeBtnEl.hasClass('animation-loaded') ) {
				jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper .btn-generic a span', function() {
					$btnEl.removeClass('animation-loaded');
					$activeBtnEl.addClass('animation-loaded');
				});
			}

		});

	})();


	/*
	======================================
		Isotop Click Event
	======================================
	*/
	(function() {
		$('.portfolio-nav ul li').on('click', function() {
			var $this = $(this);
			$this.siblings('.active').removeClass('active');
			$this.addClass('active');
			var selector = $this.attr('data-filter');

			$('#portfolioCon').isotope({
				filter: selector
			});
		});
	})();


	(function() {

		jQuery(window).on('load', function() {
			jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper h2').addClass('animation-loaded');
			jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper h5').addClass('animation-loaded');
			jQuery('.single-saastrace-slider.swiper-slide-active .slider-text-wrapper .btn-generic a span').addClass('animation-loaded');

			/*
			======================================
				Isotope Init
			======================================
			*/
			if(jQuery('.grid').length) {
				$('.grid').isotope({
				  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
				  percentPosition: true,
					transformsEnabled: true,
					transitionDuration: "1000ms",
				  masonry: {
				    columnWidth: '.grid-sizer'
				  }
				});
			}


			/*
			======================================
				Preloader
			======================================
			*/
			$('.loader').delay(1000).fadeOut('slow');
			$('.loader-wrapper').delay(1000).fadeOut('slow');

		});

	})();


	/*
	======================================
		Scroll Init
	======================================
	*/
	(function() {

		$(window).on('scroll', function() {

			var $headerH 	= jQuery('.header-area').height();
			var $windowH 	= jQuery(window).scrollTop();
			var $nav 		= jQuery('.header-area');
			var $mNav		= jQuery('.saastrace-mobile-menu-area');

			if( $windowH > $headerH ) {
				$nav.addClass('fixed');
				$mNav.addClass('fixed');
			} else {
				$nav.removeClass('fixed');
				$mNav.removeClass('fixed');
			}

		});
	})();



	/*
	======================================
		Home Link Init
	======================================
	*/

	(function() {
		function previewImages() {
			let fImage = $('.home-link h2 .screenshot').first().attr('href');
			$('.home-link-area').css('background-image', 'url(' + fImage + ')');
			
		  	$("a.screenshot").hover(function(e) {
		  		$('.home-link-area').css('background-image', 'url(' + this.href + ')');
		    },
		    function() {
		      $("#previewImage").remove();
		    });
		};

		previewImages();

	})();



	/*
	======================================
		Slinky Menu Init
	======================================
	*/
	(function() {

		const slinky = $('.saastrace-mobile-menu-area .saastrace-shrink').slinky();

	})();


	/*
	======================================
		WOW JS
	======================================
	*/
	(function() {
		new WOW().init();
	})();


	/*
	======================================
		Hamburger Init
	======================================
	*/
	(function() {
	  let $hamburger 			= $(".hamburger-wrapper .hamburger");
	  let $hamburgerPanel 		= $(".saastrace-side-panel .hamburger-wrapper .hamburger");
	  let $sidePanelWrap 		= $(".saastrace-side-panel-wrapper");
	  let $sidePanel 			= $(".saastrace-side-panel");

	  $hamburger.on("click", function(e) {
	    $hamburgerPanel.toggleClass("is-active");
	    $sidePanelWrap.toggleClass("active");
	    $sidePanel.toggleClass("active");
	  });
	})();


	/*
	======================================
		Side Panel
	======================================
	*/
	(function() {

		if(jQuery('.download-statistics #canvas').length) {
			var barChartData = {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'Number Of Views',
					backgroundColor: window.chartColors.grey,
					yAxisID: 'y-axis-1',
					data: [10000, 50000, 60000, 70000, 80000, 90000, 95000]
				}, {
					label: 'Number Of Downloads',
					backgroundColor:['#01024e', '#543864', '#8b4367', '#10103f', '#01024e', '#543864', '#8b4367'],
					yAxisID: 'y-axis-2',
					data: [5000, 20000, 50000, 60000, 50000, 65000, 80000]
				}]

			};
			window.onload = function() {
				var ctx = document.getElementById('canvas').getContext('2d');
				window.myBar = new Chart(ctx, {
					type: 'bar',
					data: barChartData,
					options: {
						responsive: true,
						title: {
							display: true,
							text: 'Explore the software data'
						},
						tooltips: {
							mode: 'index',
							intersect: true
						},
						scales: {
							yAxes: [{
								type: 'linear',
								display: true,
								position: 'left',
								id: 'y-axis-1',
							}, {
								type: 'linear',
								display: true,
								position: 'right',
								id: 'y-axis-2',
								gridLines: {
									drawOnChartArea: false
								}
							}],
						}
					}
				});
			};
		}
	})();




	/*
	======================================
		Gallery Slider Init
	======================================
	*/
	(function() {
	    var Galleryswiper = new Swiper('.our-gallery-slider', {
	      slidesPerView: 3,
	      spaceBetween: 30,
	      slidesPerGroup: 1,
	      loop: true,
	      navigation: {
	        nextEl: '.our-gallery-slider .swiper-button-next',
	        prevEl: '.our-gallery-slider .swiper-button-prev',
	      },
	      breakpoints: {
	        992: {
	          slidesPerView: 1,
	          spaceBetween: 50,
	        },
	      }
	    });
	})();


	/*
	======================================
		Our Client Slider Init
	======================================
	*/
	(function() {
	    var Galleryswiper = new Swiper('.our-client-slider', {
	      slidesPerView: 5,
	      spaceBetween: 80,
	      slidesPerGroup: 1,
	      loop: true,
	      breakpoints: {
	        575: {
	          slidesPerView: 2,
	          spaceBetween: 40,
	        },
	        768: {
	          slidesPerView: 3,
	          spaceBetween: 80,
	        }
	      }
	    });
	})();


	/*
	======================================
		Agency Content Slider Init
	======================================
	*/
    var agencyBannerSwiper = new Swiper('.agency-cs-container', {
		autoplay: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});


	/*
	======================================
		Agency Content Slider Init
	======================================
	*/
    var agencyAboutImageSwiper = new Swiper('.agency-ar-container', {
		autoplay: true,
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 30,
	});
	  
})(jQuery);