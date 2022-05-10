$('.slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: true,

  responsive: [{
    breakpoint: 769,
    settings: {
      infinite: false,

      dots: false,
    }
  },]
})

// $('.port-block-slide').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 1500,
//   arrows: false,
//   dots: false,
//   centerMode: true,
//   centerPadding: "25px",

//   responsive: [{
//     breakpoint: 769,
//     settings: {
//       infinite: false,
//       dots: false,
//     }
//   },
//   {
//     breakpoint: 3000,
//     settings: {
//       // slidesToScroll:0,
//       slider:false,
//       slidesToShow:0,
//     }
//   },
//   ]
// })


function checkerForSlider(){
	var $windowWidth = window.innerWidth;
	$(".port-block-slide").slick({	
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		initialSlide: 0,
    waitForAnimate: false,
    centerMode: true,
    centerPadding: "35px",
  });


	if($windowWidth>768){
		$(".port-block-slide").slick("unslick");
	}

}

$(window).onload = checkerForSlider();
// $(window).resize = checkerForSlider();

$(".port-block-slide-inner").on("click touch", function(){
		$(".port-block-slide-inner_active").toggleClass("port-block-slide-inner_active");
		$(this).toggleClass("port-block-slide-inner_active");
});



$('.client-block').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 769,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      }
    },
    {
      breakpoint: 3000,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
      }
    },
  ]

})

$(".client-block").on('afterChange beforeChange', function (event, slick, currentSlide, nextSlide) {
  // console.log($('.slider-block').slick('slickCurrentSlide'));
  var current = $('.client-block').slick('slickCurrentSlide');
  var prev = ((current == 2 ? 0 : current + 1) + 1);
  var next = ((current == 0 ? 2 : current - 1) + 1);
  $('.slick-prev').css("background-image", "url(" + "images/360/Client" + next + ".png" + ")");
  $('.slick-next').css("background-image", "url(" + "images/360/Client" + prev + ".png" + ")");
});
