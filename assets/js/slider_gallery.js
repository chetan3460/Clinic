$(function () {
	// Template Blocks
	blocks = {
		galleryMain: '.js-slider-gallery-main',
		galleryThumbs: '.js-slider-gallery-thumbs',
	};

// Syncronized Gallery
function sliderGallery(main, thumbs) {
	$(main).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: thumbs
	});
	$(thumbs).slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: main,
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4
				}
				}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
				},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3
				}
			}]
	});
}
// Functions Initializations
if ($(blocks.galleryMain.length) && $(blocks.galleryThumbs.length)) {
	sliderGallery(blocks.galleryMain, blocks.galleryThumbs);
}

})