// $(".top-title").css('color', 'blue');

// ヘッダー（ハンバーガメニュー）
$('.burger-btn').click(function() {
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
});


// よくある質問（アコーディオン）
$(function() {
  $('.question').click(function() {
    $answer = $(this).next('.answer');
  
    // ↓順番違うと問題が起きる。
    $answer.slideToggle(400);
    $answer.toggleClass('open');
  });
});


// スライダー
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

// wow.jsの発火宣言
new WOW().init();
