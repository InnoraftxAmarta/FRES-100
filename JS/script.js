$(document).ready(function(){
  $('.b-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    draggable: false
  });
  $('.investor').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
  
  $('.sub-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: true
  });
  
  $('.announce-slick').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.option-slick').slick({
    infinite: true,
    speed: 300,
    slidesToShow:1,
    arrows: true,
    dots: false
  });
});