// Animation
//========================//
$(function() {
  new WOW().init();
});

// Nav
//========================//
$('.burger-btn').click(function() {
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
});

// Recommend Plan
//========================//
$('.slider').slick({
  centerMode: true,
  centerPadding: '36%',
  autoplay: true,
  autoplaySpeed: 5000,//1000ごとに1秒。
  speed: 1000,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        centerPadding: false,
      }
    }
  ]
});

// FAQ
//========================//
$(function() {
  $('.question').click(function() {
    $answer = $(this).next('.answer');

    // ↓順番違うと問題が起きる。
    $answer.slideToggle(400);
    $answer.toggleClass('open');
  });
});
