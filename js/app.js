/*
  Slider function (buttons)
*/
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

/*
  Hover effects for dropdown menu.
*/
$(document).ready(function () {
  $(".subcategory-dropdown").hide();

  $(".category-item").click(function (event) {
    event.preventDefault();

    $(this).find(".subcategory-dropdown").slideToggle();
  });
  if($(window).width() > 830) {
    enableHoverScript();
  }
  $(window).resize(function() {
    if($(window).width() > 830) {
      enableHoverScript();
    } else {
      disableHoverScript();
    }
  });
  function enableHoverScript() {
    $('.category-item').hover(
      function() {
        $(this).find('.subcategory-dropdown').stop(true, true).slideDown('slow');
      },
      function() {
        $(this).find('.subcategory-dropdown').stop(true, true).slideUp('slow');
      }
    );
  }
  function disableHoverScript() {
    $('.category-item').off('mouseenter mouseleave');
  }
});

document.querySelector('.feedback-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.feedback-overlay').style.display = 'flex';
});

document.querySelector('.feedback-overlay').addEventListener('click', function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});