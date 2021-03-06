//'use strict';
// FETCHING SECTION TEMPLATES
app.directive('navbar', function () {
    return {
        priority: 0,
        templateUrl: 'html/0-navbar.html'
    };
});
app.directive('header', function () {
    return {
        priority: 1,
        require: '^^loader',
        templateUrl: 'html/1-header.html'
    };
});
app.directive('home', function () {
    return {
        priority: 2,
        require: '^^loader',
        templateUrl: 'html/2-home.html'
    };
});
app.directive('about', function () {
    return {
        priority: 3,
        require: '^^loader',
        templateUrl: 'html/3-about.html'
    };
});
app.directive('timeline', function () {
    return {
        priority: 4,
        require: '^^loader',
        templateUrl: 'html/4-timeline.html'
    };
});
app.directive('fun', function () {
    return {
        priority: 5,
        require: '^^loader',
        templateUrl: 'html/5-fun.html'
    };
});
app.directive('contact', function () {
    return {
        priority: 6,
        require: '^^loader',
        templateUrl: 'html/6-contact.html'
    };
});
app.directive('ngfooter', function () {
    return {
        priority: 7,
        require: '^^loader',
        templateUrl: 'html/7-footer.html'
    };
});
app.directive('loader', function () {
    return {
        priority: 0,
        templateUrl: 'html/8-loader.html'
    };
});
app.directive('yu', function () {
    return {
        priority: 99,
        templateUrl: 'html/yu.html'
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
                //$(".button-collapse").sideNav();

                //musicplayer();
                //jQuery('ul.tabs').tabs();
            })
        }
    }
});

app.directive('imageOnLoad', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('load', function (element) {
                console.log('image is loaded');
                scope.imagesLoadedCounter++;

                //Check if ALL images are loaded
                if (scope.imagesLoadedCounter === scope.imagesLoadedRequired) {
                    scope.$broadcast('imagesLoaded');
                }
            });
            element.bind('error', function () {
                console.log('image could not be loaded');
            });
        }
    };
});

/*app.directive('loading', ['$http', '$timeout', function ($http, $timeout)
    {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

            }
        };
    }
]);*/
