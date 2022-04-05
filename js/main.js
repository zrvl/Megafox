$(function() {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
  })
  $('.mid-slider__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
  })
})