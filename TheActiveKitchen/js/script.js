/* hamクリック処理 */
$('#ham-btn').on('click', function() {
  $(this).toggleClass('is-active');
  let index = $(this).children('span').text();
  $(this).children('span').text(index === 'もくじ' ? '閉じる' : 'もくじ');

  $('#g-nav-sp').addClass('show');
});

//#g-navをクリックしたときの各項目への移動処理
$('#g-nav a, #g-nav-sp a').click(function() {
  let target = $(this).attr('href');
  let position = $(target).offset().top;
  $('html,body').animate({scrollTop: position}, 400);
});

let scrollEnabled = true;

//#g-nav-spをクリックしたときの各項目への移動処理
$('#g-nav-sp a').click(function() {
  $('#ham-btn').children('span').text('もくじ');
  $('#g-nav-sp').removeClass('show');
  $('#ham-btn').removeClass('is-active');
  scrollEnabled = true;
  return false;
});

/* スクロールしたらheaderが出てくる */
let startPos = 0;

$(window).on('scroll', function() {
  let winScrollTop = $(this).scrollTop();
  let windowWidth = $(this).width();
  if(scrollEnabled && windowWidth < 767) {
    if (winScrollTop > startPos) {
      $('header, #ham-btn').slideUp(200);
    } else {
      $('header, #ham-btn').slideDown(200);
    }
    startPos = winScrollTop;
  }
  
  let y = $(this).scrollTop(); 
  if(y > 300) {
    $('#to-top').addClass('show');
  } else {
    $('#to-top').removeClass('show');
  }
});

$('#to-top>a').on('click', function () {
  $('html,body').animate({scrollTop: 0}, 200);
});

$('#news>dl').load('news/news.txt');

// #news-btnをクリックしたら記事が3つ追加される処理
$('#news-btn').on('click', function() {
  $('#news dt:nth-of-type(4), #news dd:nth-of-type(4), #news dt:nth-of-type(5), #news dd:nth-of-type(5),#news dt:nth-of-type(6), #news dd:nth-of-type(6)').slideToggle(200);

  let txt = $(this).text();

  $(this).text(txt === 'ニュース記事をもっと見る' ? '閉じる' : 'ニュース記事をもっと見る');
});
$('#news-btn').trigger('click'); // 初回クリック

let fullYear = new Date().getFullYear();
$('#this-year').text(fullYear === 2023 ? fullYear : `2023-${fullYear}`);

