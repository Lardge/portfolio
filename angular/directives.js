//'use strict';
/* Directives */
app.directive('header', function () {
    return {
        templateUrl: '../html/1-header.html'
    };
});
app.directive('home', function () {
    return {
        templateUrl: '../html/2-home.html'
    };
});
app.directive('about', function () {
    return {
        templateUrl: '../html/3-about.html'
    };
});
app.directive('timeline', function () {
    return {
        templateUrl: '../html/4-timeline.html'
    };
});
app.directive('ngfooter', function () {
    return {
        templateUrl: '../html/footer.html'
    };
});
app.directive('loadPlugins', function ($timeout) {
    return {
        restrict: 'A'
        , link: function (scope, element, attr) {
            $timeout(function () {
                scope.$emit(attr.onFinishRender);
            });
        }
    };
});