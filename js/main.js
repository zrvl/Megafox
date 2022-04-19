$(function() {

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');


  });

  $('.product-slide__thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    arrows: false,
    fade: true,
    asNavFor: '.product-slide__thumb',
    draggable: false,
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.product-items').slick({
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-arrow-left-long"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right-long"></i>'
  });
});