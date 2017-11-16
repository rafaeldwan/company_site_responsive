$(function() {
  var $overlay = $('.modal-overlay');

  function hideModal() {
    $('.modal').fadeOut();
    $overlay.fadeOut();
  }

  $('#members a').click(function(e) {
    e.preventDefault();
    var $e = $(this);
    var modalTop = $(window).scrollTop() + 200;
    $overlay.fadeIn()
    $e.next('aside').css('top', modalTop).fadeIn();
  });

  $('.modal a').click(function(e) {
    e.preventDefault();
    hideModal();
  });

  $overlay.click(function() {
    hideModal();
  });

  $(window).keydown(function(e) {
    if (e.key === 'Escape') {
      hideModal();
    }
  });
});
