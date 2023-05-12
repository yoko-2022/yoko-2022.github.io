/* hamクリック処理 */
$('#ham-btn').on('click', function() {
  $(this).toggleClass('is-active');
  let index = $(this).children('span').text();
  $(this).children('span').text(index === 'menu' ? 'close' : 'menu');

  $('#g-nav').toggleClass('show');
});

MicroModal.init({
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});