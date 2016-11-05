/* Controllers */
app.controller('myController', ['$scope', '$rootScope', '$timeout', 'myService', function ($scope, $rootScope, $timeout, myService) {
    $scope.loadingContent = true;
    
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
            $scope.setBackground($scope.bgItems);
        }).catch(function () {
            console.log("Error occured in Get Backgrounds");
        });
    };
    $(document).ready(function () {
        $scope.getNavigation();
        $scope.getBackgrounds();
    });
    
    $scope.changeBackground = function (bgItem) {
        angular.element(document.querySelector('#home-bg')).css('background-image', 'url(' + bgItem.imgUrl + ')');
        angular.element(document.querySelector('header .navbar-fixed nav')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
        angular.element(document.querySelector('footer.page-footer')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
        angular.element(document.querySelector('.material-tooltip .backdrop')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
    };
    $scope.setBackground = function (bgItems) {
        var randomBgId = Math.floor((Math.random() * 3) + 1);
        for (var i = 0; i < bgItems.length; i++) {
            if (bgItems[i].id == randomBgId) {
                $scope.changeBackground(bgItems[i]);
                return;
            }
        }
    };
    /*$scope.$on('$viewContentLoaded', function (event) {
        console.log("content loaded");
        $timeout(function () {
            $scope.loadingContent = false;
        }, 0);
    });*/
    //ALL THE JQUERY PLUGINS
    $timeout(function () {
        window.sr = ScrollReveal({
            viewFactor: 0.1
        , });
        sr.reveal('.timeline-event');
        jQuery('.parallax').parallax();
        $scope.$on('$viewContentLoaded', function () {
            $scope.loadingContent = false;
        });
        
        /*smoothScroll.init({
            selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
            selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
            speed: 1000, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            offset: 177, // Integer. How far to offset the scrolling anchor location in pixels
            callback: function (anchor, toggle) {} // Function to run after scrolling
        });*/
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