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
            $("#home-bg img").css({
                "filter": "blur(" + ((($(window).scrollTop()) / 25)) + "px)"
            });
            $(".portrait-frame").css({
                "width": 250 - (150 / 7) + "px !important",
                "height": 250 - (150 / 7) + "px !important",
                "bottom": -(150 / 500) - 480 + "px !important"
            });
        } else {
            $("#home-bg img").css({
                "filter": "blur(0px)"
            });
        };
    });
})(jQuery);
