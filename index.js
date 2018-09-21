function maneuverQuote() {
  // set the left property for our quote
  const contentBodyOffset = $('.content-body').offset();
  console.log(contentBodyOffset);
  $('.quote-body').css({
    left: `${contentBodyOffset.left}px`
  })

  const contentBodyDistanceToWindowTop = contentBodyOffset.top - $(window).scrollTop();
  const contentBodyHeight = $('.content-body').height();
  const quoteBodyHeight = $('.quote-body').height();
  const contentBodyHeightAboveScreen = contentBodyDistanceToWindowTop < 0 ? Math.abs(contentBodyDistanceToWindowTop) : 0;

  if (
    contentBodyDistanceToWindowTop < 0 &&
    quoteBodyHeight < (contentBodyHeight - contentBodyHeightAboveScreen)
  ) {
    $('.quote-body').css({
      top: `${Math.abs(contentBodyDistanceToWindowTop)}px`
    })
  }
}

$(document).ready(function () {
  maneuverQuote();
  window.addEventListener('resize', () => {
    maneuverQuote();
  });
  window.addEventListener('scroll', () => {
    maneuverQuote();
  });
});