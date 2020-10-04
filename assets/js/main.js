(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:false,
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1600:{
          items:1,
          nav:true
      }
  }
});

/* 4. Testimonial Active*/
var testimonial = $('.h1-testimonial-active');
if(testimonial.length){
testimonial.slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:false,
    loop:true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrow:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  });
}

// review-active
$('.expert_active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:2,
          nav:false
      },
      992:{
          items:3
      },
      1200:{
          items:4
      },
      1500:{
          items:4
      }
  }
});

// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


$('.active-review-carusel').owlCarousel({
  items:1,
  loop:true,
  autoplay:true,
  autoplayHoverPause: true,        
  margin:30,
  dots: true
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page



  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

// if (document.getElementById('default-select')) {
//   $('select').niceSelect();
// }

  //about-pro-active
  $('.details_active').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    // autoplay:true,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    nav: true,
    dots: false,
    // autoplayHoverPause: true,
    // autoplaySpeed: 800,
    responsive: {
      0: {
        items: 1,
        nav: false

      },
      767: {
        items: 1,
        nav: false
      },
      992: {
        items: 1,
        nav: false
      },
      1200: {
        items: 1,
      }
    }
  });

});

// resitration_Form
// $(document).ready(function() {
// 	$('.popup-with-form').magnificPopup({
// 		type: 'inline',
// 		preloader: false,
// 		focus: '#name',

// 		// When elemened is focused, some mobile browsers in some cases zoom in
// 		// It looks not nice, so we disable it:
// 		callbacks: {
// 			beforeOpen: function() {
// 				if($(window).width() < 700) {
// 					this.st.focus = false;
// 				} else {
// 					this.st.focus = '#name';
// 				}
// 			}
// 		}
// 	});
// });



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $('#myCarousel').carousel({
          interval: false
        });
        $('#carousel-thumbs').carousel({
          interval: false
        });
        
  
//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();

	// 	// Template Blocks
	// 	blocks = {

	// 		isotopeGallery: $('.gallery-isotope'),

	// 	};
	// // Isotope Gallery
	// if (blocks.isotopeGallery.length) {
	// 	var $gallery = blocks.isotopeGallery;
	// 	$gallery.imagesLoaded(function () {
	// 		$gallery.isotope({
	// 			itemSelector: '.gallery-item',
	// 			masonry: {
	// 				columnWidth: '.gallery-item',
	// 				gutter: 30
	// 			}
	// 		});
	// 		setTimeout(function () {
	// 			$gallery.isotope('layout');
	// 			$gallery.parent('.gallery-wrap').addClass('loaded');
	// 		}, 500);
	// 	});
	// 	isotopeFilters($gallery);
	// }


	// Isotope Filters (for Gallery Page)
	function isotopeFilters(gallery) {
		var $gallery = $(gallery);
		if ($gallery.length) {
			var container = $gallery;
			var optionSets = $(".filters-by-category .option-set"),
				optionLinks = optionSets.find("a");
			optionLinks.on('click', function (e) {
				var thisLink = $(this);
				if (thisLink.hasClass("selected")) return false;
				var optionSet = thisLink.parents(".option-set");
				optionSet.find(".selected").removeClass("selected");
				thisLink.addClass("selected");
				var options = {},
					key = optionSet.attr("data-option-key"),
					value = thisLink.attr("data-option-value");
				value = value === "false" ? false : value;
				options[key] = value;
				if (key === "layoutMode" && typeof changeLayoutMode === "function") changeLayoutMode($this, options);
				else {
					container.isotope(options);
				}
				return false
			})
		}
  }
  
  function filterCarousel(filter, carousel){
    $(filter).find('select').on('change', function() {
      var filterClass =  $(this).val();
      $(carousel).slick('slickUnfilter');
      if (filterClass != 'all') {
        $(carousel).slick('slickFilter', filterClass);
      }
    });
  }

	filterCarousel('.filterCarousel','.js-specialist-carousel');
/*------------------------------------
  HT Featured
--------------------------------------*/
function featured() {
  $('.featured-item').mouseenter(function () {
    $('.featured-item.active').removeClass('active');
    $(this).removeClass('.featured-item').addClass('active');
  });
};
        
})(jQuery);	