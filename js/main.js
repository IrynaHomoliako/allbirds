$(function () {

  var mixer = mixitup('.favorites__inner', {
		load: {
			filter: ".shoes"
		}
	});

	$('.category__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-next.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.png" alt=""></button>',
		infinite: true,
		centerMode: true,
		responsive: [
			{
				breakpoint:700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint:500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.arrivals__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-next.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.png" alt=""></button>',
		infinite: true,
		centerMode: true,
		responsive: [
			{
				breakpoint:700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint:500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});




})