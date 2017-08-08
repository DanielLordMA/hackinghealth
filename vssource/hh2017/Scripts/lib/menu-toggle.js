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
//==================================================================

$(document).ready(function() {
  $('#head-menu').hide();
  $('.head-menu-toggle').click(function(event) {
    $('#head-menu').slideToggle(100);
    event.preventDefault();
  });
});
