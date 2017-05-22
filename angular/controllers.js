/* Controllers */
app.controller('myController', ['$scope', '$rootScope', '$timeout', 'myService', '$window', '$http',
    function ($scope, $rootScope, $timeout, myService, $window, $http) {
        $scope.contentLoaded = false;

        //WHEN HOME BACKGROUND IMAGE IS LOADED
        $scope.$on('imagesLoaded', function () {
            if (!$scope.contentLoaded) {
                console.log("LOADING DONE!");

                $timeout(function () {
                    $scope.initializeRubberLetter();
                    $scope.contentLoaded = true;
                    $scope.$apply();
                    jQuery('.parallax').parallax();
                }, 250);
            }
        });

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

        //CHANGE BACKGROUND ON ALL PLACES
        $scope.changeBackground = function (bgItem) {
            angular.element(document.querySelector('#home-bg')).css('background-image', 'url(' + bgItem.imgUrl + ')');
            angular.element(document.querySelector('#home-bg img')).attr("src", bgItem.imgUrl);
            angular.element(document.querySelector('header .navbar-fixed nav')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
            angular.element(document.querySelector('footer.page-footer')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
            angular.element(document.querySelector('.material-tooltip .backdrop')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
            angular.element(document.querySelector('.submit-btn')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
            angular.element(document.querySelector('.music-player .controls')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
        };

        //SET BACKGROUND ON PAGE LOAD
        $scope.setBackground = function (bgItems) {
            var randomBgId = Math.floor((Math.random() * 3) + 1);
            for (var i = 0; i < bgItems.length; i++) {
                if (bgItems[i].id == randomBgId) {
                    $scope.changeBackground(bgItems[i]);
                    return;
                }
            }
        };
        //ALL THE JQUERY PLUGINS AFTER ALL DIRECTIVERS ARE LOADED
        $timeout(function () {
            $scope.getNavigation();
            $scope.getBackgrounds();
            window.sr = ScrollReveal({
                viewFactor: 0.1,
            });
            sr.reveal('.timeline-event');
            sr.reveal('h1');
            sr.reveal('h2');
            sr.reveal('h3');
            sr.reveal('#fun .section .content');
            sr.reveal('#contact .section .content');
            $('#nav-icon1').click(function () {
                $(this).toggleClass('open');
            });
        });


        //        $scope.isLoading = function () {
        //            return $http.pendingRequests.length > 0;
        //        };
        //
        //        $scope.$watch($scope.isLoading, function (hasPending) {
        //            if (hasPending || !$rootScope.imagesLoaded) {
        //                console.log("HAS PEDNING REQUESTS");
        //            } else {
        //                $timeout(function () {
        //                    if ($http.pendingRequests.length === 0) {
        //                        console.log("LOADING DONE!");
        //                        $scope.initializeRubberLetter();
        //                        $scope.contentLoaded = true;
        //                        //$scope.initializeMusicPlayer();
        //                    }
        //                }, 500);
        //            }
        //        });

        //initializeMusicPlayer
        $scope.initializeMusicPlayer = function () {
            musicplayer2();

            var ap = new APlayer({
                element: document.getElementById('player1'),
                theme: '#2196F3',
                music: { // Required, music info, see: ###With playlist
                    title: 'Down the walls', // Required, music title
                    author: 'Lars', // Required, music author
                    url: 'mp3/Lars_Beck-Friis_Down_The_Walls.mp3', // Required, music url
                    pic: 'img/covers/wall3.jpg', // Optional, music picture
                }
            });

            var ap = new APlayer({
                element: document.getElementById('player2'),
                theme: '#2196F3',
                music: { // Required, music info, see: ###With playlist
                    title: 'All I want to do', // Required, music title
                    author: 'Lars', // Required, music author
                    url: 'mp3/Lars_Beck-Friis_All_I_Want_To_Do.mp3', // Required, music url
                    pic: 'img/covers/all.jpg', // Optional, music picture
                }
            });
        };

        //initializeRubberLetter
        $scope.initializeRubberLetter = function () {
            jQuery('.rubber-letter').mouseenter(function () {
                if (jQuery("img", this).length) {
                    if (!jQuery("img", this).hasClass('rubberBand')) {
                        jQuery("img", this).addClass('rubberBand');
                        $scope.removeRubberBand(jQuery("img", this));
                    }
                } else if (!jQuery(this).hasClass('rubberBand')) {
                    jQuery(this).addClass('rubberBand');
                    $scope.removeRubberBand(jQuery(this));
                }
            });
            jQuery('.rubber-portrait').click(function () {
                jQuery('.portrait-frame').removeClass('smooth-entry-reverse-portrait');
                jQuery('.portrait-frame').removeClass('animation-delay-1000');
                jQuery('.portrait-frame').addClass('opacity-1');
                if (!jQuery(this).hasClass('rubberBand')) {
                    jQuery(this).addClass('rubberBand');
                    $scope.removeRubberBand(jQuery(this));

                }
            });
            $scope.removeRubberBand = function (thisObject) {
                $timeout(function () {
                    jQuery(thisObject).removeClass('rubberBand')
                }, 501);
            }
        };
}]);
