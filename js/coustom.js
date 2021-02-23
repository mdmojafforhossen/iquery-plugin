




$(document).ready(function(){
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});



})
$(document).ready(function() {
  $('.image-link').magnificPopup({
  	type:'image',
  	gallery: {
          enabled:true
        }

  });

  $(".ripple").ripples({
  dropRadius:20,
  perturbance: 0.03,
});

  // init Isotope
var $grid = $('.protfolio_items').isotope({
  // options
});
// filter items on button click
$('.isotop_button').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// filter items on button click

$(document).on( 'click', '.isotop_button button', function() {
  $(this).addClass("active").siblings().removeClass("active");
});

 
});

new WOW().init();
// var typed = new Typed('.element', {
//   strings: ["First sentence.", "Second sentence."],
//   typeSpeed: 30
// });

 
var typed3 = new Typed('.element', {
    strings: [" WORDPRESS-EXPERT","WEB-DESINGER","DEVELOPER"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,

  });

$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 3,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});