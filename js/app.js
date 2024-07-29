$(document).ready(function () {
  /*
    Slider function (buttons)
  */

  $(".slider").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: "_linear",
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
  });

  $('.slider-button-prev').on('click', function () {
    $('.slider').slick('slickPrev');
  });

  $('.slider-button-next').on('click', function () {
    $('.slider').slick('slickNext');
  });

  /*
    Hover effects for dropdown menu.
  */

  $(".subcategory-dropdown").hide();

  $(".category-item").click(function (event) {
    event.preventDefault();

    $(this).find(".subcategory-dropdown").slideToggle();
  });

  if ($(window).width() > 830) {
    enableHoverScript();
  }

  $(window).resize(function () {
    if ($(window).width() > 830) {
      enableHoverScript();
    } else {
      disableHoverScript();
    }
  });

  function enableHoverScript() {
    $('.category-item').hover(
      function () {
        $(this).find('.subcategory-dropdown').stop(true, true).slideDown('slow');
      },

      function () {
        $(this).find('.subcategory-dropdown').stop(true, true).slideUp('slow');
      }
    );
  }
  
  function disableHoverScript() {
    $('.category-item').off('mouseenter mouseleave');
  }
});

document.querySelector('.feedback-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.feedback-overlay').style.display = 'flex';
});

document.querySelector('.feedback-overlay').addEventListener('click', function (event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});