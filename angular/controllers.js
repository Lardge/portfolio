/* Controllers */
app.controller('myController', ['$scope', '$timeout', 'myService', function ($scope, $timeout, myService) {
    //GET NAV-ITEMS FROM JSON FILE
    $scope.getNavigation = function () {
        myService.getNavigation().then(function (response) {
            console.log(response);
            $scope.navItems = response.navItems;
        }).catch(function () {
            console.log("Error occured in Get Navigation");
        });
    };
    //GET BG-ITEMS FROM JSON FILE
    $scope.getBackgrounds = function () {
        myService.getBackgrounds().then(function (response) {
            console.log(response);
            $scope.bgItems = response.bgItems;
        }).catch(function () {
            console.log("Error occured in Get Backgrounds");
        });
    };
    $(document).ready(function () {
        $scope.getNavigation();
        $scope.getBackgrounds();
    });
    $scope.changeBackground = function (imgUrl) {
        angular.element(document.querySelector('#home-bg')).css('background', 'url(' + imgUrl + ')')
    };
    //ALL THE JQUERY PLUGINS
    $timeout(function () {
        window.sr = ScrollReveal({
            //reset: true,
            viewFactor: 0.1
        , });
        sr.reveal('.timeline-event');
        sr.reveal('#about');
        smoothScroll.init({
            selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
            selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
            speed: 1000, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            offset: 160, // Integer. How far to offset the scrolling anchor location in pixels
            callback: function (anchor, toggle) {} // Function to run after scrolling
        });
        //FROSET GLASS
        /*        jQuery(function () {
                    var transformCanvas = function () {
                        jQuery("canvas").css("-webkit-transform", "translatey(-" + (0 - this.y) + "px)");
                    };
                    // https://github.com/cubiq/iscroll
                    var scroller = new IScroll("body", {
                        mouseWheel: true
                        , probeType: 3
                    });
                    scroller.on("scroll", transformCanvas);
                    scroller.on("scrollEnd", transformCanvas);
                    // http://html2canvas.hertzen.com
                    html2canvas(jQuery("body"), {
                        onrendered: function (canvas) {
                            jQuery("header").show();
                            //jQuery("body").css("overflow", "hidden");
                            jQuery(".navbar-fixed nav").append(canvas);
                            jQuery("canvas").attr("id", "canvas");
                            // http://www.quasimondo.com/StackBlurForCanvas
                            stackBlurCanvasRGB("canvas", 0, 0, jQuery("canvas").width(), jQuery("canvas").height(), 20);
                        }
                    });
                    jQuery(document).bind("touchmove touchend", function (e) {
                        e.preventDefault();
                        transformCanvas();
                    });
                });*/
    });
}]);