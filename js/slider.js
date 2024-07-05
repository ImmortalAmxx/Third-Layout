// slider.js
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: false
  });

  $('.slider-first-btn').on('click', function(){
    $('.slider').slick('slickPrev');
  });

  $('.slider-last-btn').on('click', function(){
    $('.slider').slick('slickNext');
  });
});
