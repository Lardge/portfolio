/**
 * Hide navbar on on scroll down, reveal on scroll up
 * @see https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
 */
(function ($) {
    'use strict';
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar-fixed').removeClass('bounce-out').addClass('bounce-in');
        } else {
            if ($('.navbar-fixed').hasClass('bounce-in')) {
                $('.navbar-fixed').removeClass('bounce-in').addClass('bounce-out');
            }
        }
        if ($('#home-bg').height() - $(this).scrollTop() <= 150) {
            $('.portrait-frame').removeClass('smooth-entry-reverse-portrait');
            setTimeout(function () {
                $('.portrait-frame').addClass('portraitMove');
            }, 1);
        } else {
            $('.portrait-frame').removeClass('portraitMove');
        }
    });
})(jQuery);
