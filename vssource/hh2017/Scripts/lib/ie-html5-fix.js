//==================================================================
// @summary
//   Fix for HTML5 elements in Internet Explorer browser.
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

var elements = ['section', 'article', 'aside', 'header', 'footer', 'nav',
'figure', 'figcaption', 'time', 'mark'];

for( var i = 0; i < elements.length; i++ ) {
    document.createElement(elements[i]);
}
