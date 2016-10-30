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
            offset: 56, // Integer. How far to offset the scrolling anchor location in pixels
            callback: function (anchor, toggle) {} // Function to run after scrolling
        });
    });
}]);