
// Search

!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}var n,a,t;function c(s,e){(n(s,e)?t:a)(s,e)}"classList"in document.documentElement?(n=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},t=function(s,e){s.classList.remove(e)}):(n=function(s,n){return e(n).test(s.className)},a=function(s,e){n(s,e)||(s.className=s.className+" "+e)},t=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:n,addClass:a,removeClass:t,toggleClass:c,has:n,add:a,remove:t,toggle:c};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);




(function() {
    var saastraceSearch = document.getElementById( 'saastrace-search' );
    if( typeof saastraceSearch !== 'undefined' && saastraceSearch !== null ) {
        var morphSearch = document.getElementById( 'morphsearch' ),
            input = morphSearch.querySelector( 'input.morphsearch-input' ),
            ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
            isOpen = isAnimating = false,
            // show/hide search area
            toggleSearch = function(evt) {

                var offsets = morphsearch.getBoundingClientRect();
                if( isOpen ) {
                    classie.remove( morphSearch, 'open' );
                } else {
                    classie.add( morphSearch, 'open' );
                }
                isOpen = !isOpen;
            };

        // events
        saastraceSearch.addEventListener( 'click', toggleSearch );
        ctrlClose.addEventListener( 'click', toggleSearch );

    }

})();
