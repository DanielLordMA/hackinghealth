//==================================================================
// @summary
//   Functionality for scroll to top button usually found in footer.
//
// @param none.
// @return none.
//
// @notes
//   Version:        1.0
//   Author:         Luca Sturlese
//   Creation Date:  29.04.2017
//   Purpose/Change: Initial development
//==================================================================

function scrollToTop() {
  var verticalOffset, element, offset, offsetTop;

  verticalOffset = typeof(verticalOffset) !== 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;

  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

$(function(){
  $(document).on( 'scroll', function(){
    if ($(window).scrollTop() > 100) {
      $('.scrolltop').addClass('show');
    } else {
      $('.scrolltop').removeClass('show');
    }
  });
});


$(function(){
   $(document).on( 'scroll', function(){
    if ($(window).scrollTop() > 100) {
      $('.scrolltop').addClass('show');
    }else{
      $('.scrolltop').removeClass('show');
    }
  });

  $('.scrolltop').on('click', scrollToTop);
});
