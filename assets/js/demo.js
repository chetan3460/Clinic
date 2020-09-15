$(function () {

	"use strict";

	var $document = $(document),
		$window = $(window),
		windowWidth = window.innerWidth || $window.width(),
		windowH = $window.height();

	// Template options
	var templateOption = {
			mobileMenuBreikpont: 1023,
			smoothScroll: false, // smooth scroll enable (set 'false' for disable)
			backToTop: true // back to top button enable (set 'false' for disable)
		},

		// Template Blocks
		blocks = {


			galleryThumbs: '.js-slider-gallery-thumbs',
			isotopeGallery: $('.gallery-isotope'),

		};

	// Isotope Gallery
	if (blocks.isotopeGallery.length) {
		var $gallery = blocks.isotopeGallery;
		$gallery.imagesLoaded(function () {
			$gallery.isotope({
				itemSelector: '.gallery-item',
				masonry: {
					columnWidth: '.gallery-item',
					gutter: 30
				}
			});
			setTimeout(function () {
				$gallery.isotope('layout');
				$gallery.parent('.gallery-wrap').addClass('loaded');
			}, 500);
		});
		isotopeFilters($gallery);
	}

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

	// Functions Initializations

	filterCarousel('.filterCarousel','.js-specialist-carousel');




})

