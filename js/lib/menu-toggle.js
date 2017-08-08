//==================================================================
// @summary
//   Used for the main menu button, to toggle showing / hiding the
//   menu of the site.
//
// @param none.
// @return none.
//
// @notes
//   Version:        1.0
//   Author:         Luca Sturlese
//   Creation Date:  29.04.2017
//   Purpose/Change: Initial development
//
//   Version:        1.1
//   Author:         Luca Sturlese
//   Creation Date:  08.08.2017
//   Purpose/Change: Hide menu on menu item click (as local anchor tags)
//==================================================================

//  Menu Toggle
//-------------------------------
$(document).ready(function() {
  $('#head-menu').hide();
  $('.head-menu-toggle').click(function(event) {
    $('#head-menu').slideToggle(100);
    event.preventDefault();
  });
});


//  Hide menu on click
//-------------------------------
$(document).ready(function() {
  $('.head-menu').children('a').click(function() {
    $('#head-menu').hide();
  });
});
