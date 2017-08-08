//==================================================================
// @summary
//   Used to switch between dark and light mode CSS
//
// @param none.
// @return none.
//
// @notes
//   Version:        1.0
//   Author:         Luca Sturlese
//   Creation Date:  08.08.2017
//   Purpose/Change: Initial development
//==================================================================

// Source:  https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
function changeCSS(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName('link').item(cssLinkIndex);
    var newlink = document.createElement('link');

    newlink.setAttribute('rel', 'stylesheet');
    newlink.setAttribute('type', 'text/css');
    newlink.setAttribute('href', cssFile);

    document.getElementsByTagName('head').item(0).replaceChild(newlink, oldlink);
}

// myonoffswitch
$(document).ready(function() {
  $('#myonoffswitch').change(function() {
    if(this.checked) {
      changeCSS('style.css', 0);
      scrollToTop();
    } else {
      changeCSS('style-dark.css', 0);
      scrollToTop();
    }
  });
});
