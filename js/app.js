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
    easing: "linear",
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

  /* Feedback notification */
  $('#feedback-form').on('submit', function (event) {
    event.preventDefault();
    const name = $('#name').val().trim();
    const phone = $('#phone').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    if (name !== '' && phone !== '' && email !== '' && message !== '' && validateName(name) && validatePhoneNumber(phone) && validateMessage(message)) {
      alert('Ваше повідомлення надіслано!');
      $('#feedback-form')[0].reset();
      $('.feedback-overlay').hide();
    }
  });

  $('.close-button').on('click', function () {
    $('.feedback-overlay').hide();
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

  /* Validate name */
  function validateName(name) {
    const namePattern = /^[a-zA-Zа-яА-ЯїЇєЄіІ]{2,}$/;
    const isValid = namePattern.test(name);

    if (!isValid) {
      alert('Ім\'я повинно містити тільки літери і мінімум 2 символи');
      return false;
    }

    return true;
  }

  /* Validate phone */
  function validatePhoneNumber(phone) {
    const cleanedPhoneInput = phone.replace(/[\s\-]/g, '');
    const phonePattern = /^\+[0-9]{7,14}$/;
    const isValid = phonePattern.test(cleanedPhoneInput);

    if (!isValid) {
      alert('Номер телефону повинен починатися з + і містити від 8 до 15 цифр.');
      return false;
    }

    return true;
  }

  /* Validate message */
  function validateMessage(message) {
    const messageLength = message.length;
    const isValid = messageLength >= 3;
    const isOnlySpace = message.trim() === ''

    if (!isValid || isOnlySpace) {
      alert('Повідомлення має містити не менше 3 символів.');
      return false;
    }

    return true;
  }
});
