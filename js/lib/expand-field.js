//==================================================================
// @summary
//   Used to toggle showing / hiding of a field.
//   .expandable-content is the hidden content
//   .expandable is the class to apply to an element so it can be clicked
//
// @param none.
// @return none.
//
// @notes
//   Version:        1.0
//   Author:         Michael Cadogan
//   Creation Date:  08.08.2017
//   Purpose/Change: Initial development
//
//   Version:        1.1
//   Author:         Luca Sturlese
//   Creation Date:  08.08.2017
//   Purpose/Change: Updated class names to integrate with existing
//                   class structure of project
//==================================================================

$(document).ready(function() {
    $('.cont-moreinfo').hide();
    $('.cont-moreinfo-toggle').click(function() {
        $(this).next('.cont-moreinfo').slideToggle(100);
        event.preventDefault();
    });
});
