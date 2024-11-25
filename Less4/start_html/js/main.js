
$(function () {
  var mixer = mixitup('.portfolio__content');

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"> <img src="img/left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next">   <img src="img/right.svg" alt=""> </button>',
  });
});