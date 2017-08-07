//==================================================================
// @summary
//   Fixes & styling to help CSS styling.
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


//  Logo fix for no SVG support
//-------------------------------
if (!Modernizr.svg) {                   //jshint ignore:line
  $('.logo').addClass('no-svg');
}


//  Applying FitVids to Module
//-------------------------------
$('article').fitVids();
