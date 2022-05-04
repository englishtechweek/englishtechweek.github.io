/* Template: Bono - Coming Soon Page Pack HTML Template
   Author: Inovatik
   Created: Feb 2020
   Description: Custom JS file
*/

$('a[href*=\\#stream]').on('click', function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	/* Countdown Timer - The Final Countdown */
	$('#clock').countdown('2022/05/04 14:00:00') /* change here your "countdown to" date */
	.on('update.countdown', function(event) {
		var format = '<span class="counter-number">%D<br><span class="timer-text">Days</span></span><span class="counter-number">%H<br><span class="timer-text">Hours</span></span><span class="counter-number">%M<br><span class="timer-text">Minutes</span></span><span class="counter-number">%S<br><span class="timer-text">Seconds</span></span>';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) {
	$(this).html('The live has started !')
    });

    
    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
	});
	

	/* Particles */
	particlesJS("particles-js", {
		"particles": {
		"number": {
			"value": 120,
			"density": {
			"enable": true,
			"value_area": 1200
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
			"width": 0,
			"color": "#000000"
			},
			"polygon": {
			"nb_sides": 5
			},
			"image": {
			"src": "img/github.svg",
			"width": 100,
			"height": 100
			}
		},
		"opacity": {
			"value": 0.2,
			"random": false,
			"anim": {
			"enable": false,
			"speed": 1,
			"opacity_min": 0.2,
			"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
			"enable": false,
			"speed": 40,
			"size_min": 0.1,
			"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
			}
		}
		},
		"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
			"enable": true,
			"mode": "grab"
			},
			"onclick": {
			"enable": true,
			"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
			"distance": 140,
			"line_linked": {
				"opacity": 1
			}
			},
			"bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
			},
			"repulse": {
			"distance": 200,
			"duration": 0.4
			},
			"push": {
			"particles_nb": 4
			},
			"remove": {
			"particles_nb": 2
			}
		}
		},
		"retina_detect": true
	});


	/* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });

    

	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);
