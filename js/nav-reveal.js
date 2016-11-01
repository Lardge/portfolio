/**
 * Hide navbar on on scroll down, reveal on scroll up
 * @see https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
 */
(function ($) {
    'use strict';
    /*    var didScroll;
        var lastScrollTop = 0;
        var delta = 400;
        var navbarHeight = $('.navbar-fixed').outerHeight();
        $(window).scroll(function () {
            didScroll = true;
        });*/
    /*    setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);*/
    /*    function hasScrolled() {
            var st = $('body').scrollTop();
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('.navbar-fixed').removeClass('bounce-out').addClass('bounce-in');
            }
            else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('.navbar-fixed').removeClass('bounce-in').addClass('bounce-out');
                }
            }
            lastScrollTop = st;
        }*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.navbar-fixed').removeClass('bounce-out').addClass('bounce-in');
            //$('.portrait-frame').addClass('small');
        }
        else {
            if ($('.navbar-fixed').hasClass('bounce-in')) {
                $('.navbar-fixed').removeClass('bounce-in').addClass('bounce-out');
                //$('.portrait-frame').removeClass('small');
            }
        }
    });
})(jQuery);