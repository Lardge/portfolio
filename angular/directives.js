//'use strict';
// FETCHING SECTION TEMPLATES
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
app.directive('fun', function () {
    return {
        templateUrl: '../html/5-fun.html'
    };
});
app.directive('contact', function () {
    return {
        templateUrl: '../html/6-contact.html'
    };
});
app.directive('ngfooter', function () {
    return {
        templateUrl: '../html/7-footer.html'
    };
});
app.directive('loader', function () {
    return {
        templateUrl: '../html/8-loader.html'
    };
});
//INITIALIZE MATERILIZE FUNCTIONS
app.directive('navItemsRepeatDirective', function ($timeout) {
    return function (scope, element, attrs) {
        if (scope.$last) {
            $timeout(function () {
                jQuery('.tooltipped').tooltip({
                    delay: 50
                });
                jQuery('.scrollspy').scrollSpy({
                    scrollOffset: 150
                });
            })
        }
    }
});
app.directive('myMainDirective', function ($timeout) {
    return function (scope, element, attrs) {
        if (scope.$last) {
            $timeout(function () {
                //NOTHING
            })
        }
    }
});
app.directive('loading', ['$http', '$timeout', function ($http, $timeout)
    {
        return {
            restrict: 'A'
            , link: function (scope, elm, attrs) {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };
                scope.$watch(scope.isLoading, function (v) {
                    if (v) {
                        elm.show();
                    }
                    else {
                        $timeout(function () {
                            elm.hide()
                        }, 50);
                    }
                });
            }
        };
    }]);
//NOT DOING ANYTHING
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