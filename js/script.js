$(function() {
  $('#ham-btn').on('click', function() {
    $(this).toggleClass('is-active');
    let index = $(this).children('span').text();
    $(this).children('span').text(index === 'menu' ? 'close' : 'menu');
  
    $('#g-nav').toggleClass('show');
  });
  
  $(window).scroll(function() {
    let y = $(this).scrollTop();
    
    $('#top-btn>a').on('click', function() {
      $('html,body').animate({scrollTop: 0}, 600);
      return false;
    })
    let point1 = $('#skill').offset().top;
    let point2 = $('#timeline').offset().top;
  
    if(y > point1 - 200) {
      $('#skill>.skill-inner').addClass('show');
    } else {
      $('#skill>.skill-inner').removeClass('show');
    }
  
    if(y > point2 - 100) {
      $('#timeline .timeline-item').addClass('show');
    } else {
      $('#timeline .timeline-item').removeClass('show');
    }
  
    if(y > 300) {
      $('#to-top').addClass('show');
    } else {
      $('#to-top').removeClass('show');
    }
  });

  $('#to-top>a').on('click', function () {
    $('html,body').animate({scrollTop: 0}, 200);
    return false;
  });
});

MicroModal.init({
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});