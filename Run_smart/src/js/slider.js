// slider
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        //adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });
