//==================================================================
// @summary
//   Used for the mobile menu button, to toggle showing / hiding the
//   mobile menu of the site.
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
  $('#head-menu-mobile').hide();
  $('.head-menu-mobile-toggle').click(function(event) {
    $('#head-menu-mobile').slideToggle(300);
    event.preventDefault();
  });
});
