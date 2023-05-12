/* main-visual部分 */
$('.bxslider').bxSlider({
  mode: 'fade',
  auto: true,
  controls: false,
  pager: false,
  touchEnabled: false,
});

/* ハンバーガーメニュー */
$('#g-nav').hide();
$('#ham-btn').on('click', function() {
  $(this).toggleClass('is-active');
  $('#g-nav').slideToggle(200);
  $('#g-nav a').on('click', function() {
    $('#g-nav').fadeOut(200);
    $('#ham-btn').removeClass('is-active');
  });
});

/* news部分の外部ファイルを呼び出す */
$('#news-list').load('news/news.txt');

/* news部分のボタン処理 */
$('#btn').on('click', function() {
  $('#news-list>:is(dt:nth-of-type(n+4), dd:nth-of-type(n+4)').slideToggle(200);
  
  let btnText = $(this).text();
  if(btnText === 'もっと見る') {
    $(this).text('閉じる');
  } else {
    $(this).text('もっと見る');
  }
});

/* footer */
let yy = new Date().getFullYear(); 
/* $('#this-year').text(yy); */
if(yy > 2023) {
  $('#this-year').text(`2023-${yy}`);
} else {
  $('#this-year').text(yy);
}