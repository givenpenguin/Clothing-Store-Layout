jQuery(function ($) {
	'use strict';

	/* ================== Simple buttons ================== */

	$(".tab-header__link").on("click", function() {
		$(".tab-header__link").removeClass("active");
		$(this).addClass("active");
	});

	$(".tab-main__link").on("click", function() {
		$(".tab-main__link").removeClass("active");
		$(this).addClass("active");
		$(".tab-main").removeClass("active");
		$(".burger-menu").removeClass("active");
	});


	$(".main__closer").on("click", function() {
		$(".sidebar__content").removeClass("active");
		$(".drawer").removeClass("active");
		$(".main__closer").fadeOut();
	});

	$(".header-block__cancel").on("click", function() {
		$(".drawer").removeClass("active");
		$(".sidebar__content").removeClass("active");
		$(".main__closer").fadeOut();
	});

	$(".burger-menu").on("click", function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".tab-main").removeClass("active");
		} else {
			$(this).addClass("active");
			$(".tab-main").addClass("active");
		}
	});
	

	$(".cart-button").on("click", function() {
		$(".drawer").addClass("active");
		$(".main__closer").fadeIn();
	});

	$(".details__cart-button").on("click", function() {
		$(".drawer").addClass("active");
		$(".main__closer").fadeIn();
	});
	

	$(".arrow-right").on("click", function() {
		$(".sidebar__content").addClass("active");
		$(".main__closer").fadeIn();
	});
	
	/* ================== Show details ================== */

	$(".size-block__button").on("click", function() {
		$(".size-block__button").removeClass("active");
		$(this).addClass("active");
	});

	$("._arrow-next").on("click", function() {
		var currentImage = $(".main-images__image.active");
		var currentImageIndex = $(".main-images__image.active").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $(".main-images__image").eq(nextImageIndex);

		var currentGalleryImage = $(".gallery__image.active");
		var nextGalleryImage = $(".gallery__image").eq(nextImageIndex);
		
		currentImage.removeClass("active");
		currentGalleryImage.removeClass("active");

		if(nextImageIndex === ($(".main-images__image:last").index() + 1)) {
			$(".main-images__image").eq(0).addClass("active");
			$(".gallery__image").eq(0).addClass("active");
		} else {
			nextImage.addClass("active");
			nextGalleryImage.addClass("active");
		}
	});

	$("._arrow-prev").on("click", function() {
		var currentImage = $(".main-images__image.active");
		var currentImageIndex = $(".main-images__image.active").index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $(".main-images__image").eq(prevImageIndex);

		var currentGalleryImage = $(".gallery__image.active");
		var prevGalleryImage = $(".gallery__image").eq(prevImageIndex);
		
		currentImage.removeClass("active");
		prevImage.addClass("active");

		currentGalleryImage.removeClass("active");
		prevGalleryImage.addClass("active");
	});

	$(".gallery__image").on("click", function() {
		var currentImage = $(".main-images__image.active");
		var currentImageIndex = $(".main-images__image.active").index();
		var currentGalleryImage = $(".gallery__image").eq(currentImageIndex);
		var nextGalleryImage = $(this);
		var nextGalleryImageIndex = $(this).index();
		var nextImage = $(".main-images__image").eq(nextGalleryImageIndex);
		
		currentImage.removeClass("active");
		currentGalleryImage.removeClass("active");

		nextImage.addClass("active");
		nextGalleryImage.addClass("active");
	});

	/* ================== Cart quantity ================== */

	var minValue = 1;
	var maxValue = 10;

	$(".decrease-button").on("click", function() {
		var value = $(".quantity__value").val();

		if(value > minValue) {
			value--;
		}

		$(".quantity__value").val(value);
	});

	$(".increase-button").on("click", function() {
		var value = $(".quantity__value").val();

		if(value < maxValue) {
			value++;
		}

		$(".quantity__value").val(value);
	});

	$('.quantity__value').on("blur", function (){
		var inputValue = $(this).val();

		if(inputValue < minValue || inputValue > maxValue) {
			$(".quantity__value").val(1);
		}
	});

}(jQuery));