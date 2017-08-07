//==================================================================
// @summary
//   Highlighting of current menu item in WordPress primary menu
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

$(function(){
  var path = window.location.href;

  if ( path ) {
    $('nav.head-menu a[href="' + path + '"]').attr('class', 'current-menu-item');
  }
});
