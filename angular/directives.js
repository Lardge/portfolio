//'use strict';
// FETCHING SECTION TEMPLATES
app.directive('header', function () {
    return {
        priority: 1,
        require: '^^loader',
        templateUrl: '../html/1-header.html'
    };
});
app.directive('home', function () {
    return {
        priority: 2,
        require: '^^loader',
        templateUrl: '../html/2-home.html'
    };
});
app.directive('about', function () {
    return {
        priority: 3,
        require: '^^loader',
        templateUrl: '../html/3-about.html'
    };
});
app.directive('timeline', function () {
    return {
        priority: 4,
        require: '^^loader',
        templateUrl: '../html/4-timeline.html'
    };
});
app.directive('fun', function () {
    return {
        priority: 5,
        require: '^^loader',
        templateUrl: '../html/5-fun.html'
    };
});
app.directive('contact', function () {
    return {
        priority: 6,
        require: '^^loader',
        templateUrl: '../html/6-contact.html'
    };
});
app.directive('ngfooter', function () {
    return {
        priority: 7,
        require: '^^loader',
        templateUrl: '../html/7-footer.html'
    };
});
app.directive('loader', function () {
    return {
        priority: 0,
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
                    scrollOffset: 80
                });
                $(".button-collapse").sideNav();

                musicplayer();
                //jQuery('ul.tabs').tabs();
            })
        }
    }
});
/*  app.directive('mainload', ['$http', '$timeout', function ($http, $timeout) {
    return {
              restrict: 'A'
                , link: function (scope, element, attrs) {
                    $timeout(function () {
                        scope.mainIsLoading = function () {
                            return $http.pendingRequests.length > 0;
                        };
                        scope.$watch(scope.isLoading, function (v) {
                            if (v) {
                                scope.loadingContent = false;
                            }
                            else {
                                console.log("MAINLOADING DONE!");
                            }
                        })
                    })
                }
    };
}]);*/
app.directive('loading', ['$http', '$timeout', function ($http, $timeout)
    {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };
                scope.$watch(scope.isLoading, function (v) {
                    if (v) {
                        //element.show();
                        element.removeClass('hideLoader')
                    } else {
                        $timeout(function () {
                            //element.hide()
                            console.log("LOADING DONE!");
                            element.addClass('hideLoader')
                        }, 100);
                    }
                });
            }
        };
    }]);
//NOT DOING ANYTHING
app.directive('loadImg', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.on('load', function (event) {
                scope.loadingContent = false;
            })
        }
    }
});
