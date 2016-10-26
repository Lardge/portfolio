'use strict';
/* Directives */
app.directive('header', function () {
    return {
        templateUrl: '../html/header.html'
    };
});
app.directive('home', function () {
    return {
        templateUrl: '../html/home.html'
    };
});
app.directive('section1', function () {
    return {
        templateUrl: '../html/section-1.html'
    };
});
app.directive('section2', function () {
    return {
        templateUrl: '../html/section-2.html'
    };
});
app.directive('section3', function () {
    return {
        templateUrl: '../html/section-3.html'
    };
});
app.directive('section4', function () {
    return {
        templateUrl: '../html/section-4.html'
    };
});
app.directive('section5', function () {
    return {
        templateUrl: '../html/section-5.html'
    };
});
app.directive('section6', function () {
    return {
        templateUrl: '../html/section-6.html'
    };
});
app.directive('timeline', function () {
    return {
        templateUrl: '../vertical-timeline/index.html'
    };
});
app.directive('sectionfooter', function () {
    return {
        templateUrl: '../html/section-footer.html'
    };
});
app.directive('init', function () {
    return {
        templateUrl: '../js/init.js'
    };
});
/*app.directive('heightStuff', ['$timeout', function ($timeout) {
    return {
        link: function ($scope, element, attrs) {
            $scope.$on('dataloaded', function () {
                $timeout(function () { // You might need this timeout to be sure its run after DOM render.
                    console.log('hej');
                }, 0, false);
            })
        }
    };
}]);*/
//$scope.allDirectivesLoaded = true;