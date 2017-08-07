//==================================================================
// @summary
//   Helps with accessibility for keyboard only users.
//
// @param none.
// @return none.
//
// @notes
//   Version:        1.0
//   Author:         Underscores
//   Creation Date:  27.11.2016
//   Purpose/Change: From Underscores starter theme
//==================================================================//
// Learn More: https://git.io/vWdr2

(function() {
	var isIe = /(trident|msie)/i.test( navigator.userAgent );

	if ( isIe && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();
