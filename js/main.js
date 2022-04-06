$(function() {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })
  $('.product-items').slick({
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-arrow-left-long"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right-long"></i>'
  })
})