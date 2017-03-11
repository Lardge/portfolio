//'use strict';
// FETCHING SECTION TEMPLATES
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

                //musicplayer();
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
                            musicplayer2();

                            var ap = new APlayer({
                                element: document.getElementById('player1'), // Optional, player element
                                narrow: false, // Optional, narrow style
                                autoplay: false, // Optional, autoplay song(s), not supported by mobile browsers
                                showlrc: 0, // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
                                mutex: true, // Optional, pause other players when this player playing
                                theme: '#e6d0b2', // Optional, theme color, default: #b7daff
                                mode: 'random', // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
                                preload: 'metadata', // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
                                listmaxheight: '513px', // Optional, max height of play list
                                music: { // Required, music info, see: ###With playlist
                                    title: 'Down the walls', // Required, music title
                                    author: 'Lars', // Required, music author
                                    url: 'mp3/Lars_Beck-Friis_Down_The_Walls.mp3', // Required, music url
                                    pic: 'img/covers/wall2.jpg', // Optional, music picture
                                }
                            });

                            var ap = new APlayer({
                                element: document.getElementById('player2'), // Optional, player element
                                music: { // Required, music info, see: ###With playlist
                                    title: 'Down the walls', // Required, music title
                                    author: 'Lars', // Required, music author
                                    url: 'mp3/Lars_Beck-Friis_Down_The_Walls.mp3', // Required, music url
                                    pic: 'img/covers/wall2.jpg', // Optional, music picture
                                }
                            });

                            var ap = new APlayer({
                                element: document.getElementById('player3'), // Optional, player element
                                music: { // Required, music info, see: ###With playlist
                                    title: 'Down the walls', // Required, music title
                                    author: 'Lars', // Required, music author
                                    url: 'mp3/Lars_Beck-Friis_Down_The_Walls.mp3', // Required, music url
                                    pic: 'img/covers/wall2.jpg', // Optional, music picture
                                }
                            });


                            jQuery('.rubber-letter').mouseenter(function () {
                                if (jQuery("img", this).length) {
                                    if (!jQuery("img", this).hasClass('rubberBand')) {
                                        jQuery("img", this).addClass('rubberBand');
                                        scope.removeRubberBand(jQuery("img", this));
                                    }
                                } else if (!jQuery(this).hasClass('rubberBand')) {
                                    jQuery(this).addClass('rubberBand');
                                    scope.removeRubberBand(jQuery(this));
                                }
                            });
                            jQuery('.rubber-portrait').click(function () {
                                jQuery('.portrait-frame').removeClass('smooth-entry-reverse-portrait');
                                jQuery('.portrait-frame').removeClass('animation-delay-1000');
                                jQuery('.portrait-frame').addClass('opacity-1');
                                if (!jQuery(this).hasClass('rubberBand')) {
                                    jQuery(this).addClass('rubberBand');
                                    scope.removeRubberBand(jQuery(this));

                                }
                            });
                            scope.removeRubberBand = function (thisObject) {
                                $timeout(function () {
                                    jQuery(thisObject).removeClass('rubberBand')

                                }, 501);
                            }

                        }, 200);
                        jQuery.getJSON('//freegeoip.net/json/?callback=?', function (data) {
                            console.log(JSON.stringify(data, null, 2));
                        });
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
