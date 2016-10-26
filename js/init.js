jQuery(document).ready(function () {
    jQuery(function () {
        jQuery('.button-collapse').sideNav({
            menuWidth: 250, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        jQuery('.parallax').parallax();
        jQuery('.carousel').carousel({
            time_constant: 200
        });
        
        //INITALIZE SMOOTH-SCROLL.JS
        smoothScroll.init({
            selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
            selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
            speed: 1000, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            offset: 56, // Integer. How far to offset the scrolling anchor location in pixels
            callback: function (anchor, toggle) {} // Function to run after scrolling
        });
    });
});