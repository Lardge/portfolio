/* Controllers */
app.controller('myController', ['$scope', '$rootScope', '$timeout', 'myService', '$window', '$http', function ($scope, $rootScope, $timeout, myService, $window, $http) {
    $scope.contentLoaded = false;
    $scope.colorArray = ["#F44336", "#9C27B0", "#3F51B5", "#009688", "#3F51B5", "#8BC34A", "#FF5722"];
    $scope.imagesLoadedCounter = 0;
    $scope.imagesLoadedRequired = 4;
    $scope.windowWidthMobile = (jQuery(window).width() <= 800);

    //RUN WHEN COTROLLER IS LOADED
    $scope.initializeController = function () {
        $timeout(function () {
            $scope.getNavigation();
            $scope.getBackgrounds();
            $scope.initializeScrollReveal();

            jQuery(".bf-logo").click(function () {
                jQuery("header .page-title").toggleClass('smooth-entry-reverse smooth-leave-reverse');
            });
        });
    };

    $scope.initializeController();

    //WHEN HOME BACKGROUND IMAGE IS LOADED
    $scope.$on('imagesLoaded', function () {
        if (!$scope.contentLoaded) {
            console.log("LOADING DONE!");
            $timeout(function () {
                $scope.contentLoaded = true;
                $scope.initializeRubberLetter();
                $scope.initializeSideNav();
                $scope.initializeWindowScroll();
                $scope.$apply();
                jQuery('.parallax').parallax();
            }, 500);
        }
    });

    $scope.initializeSideNav = function () {
        $scope.sidenav = new Sidenav({
            content: document.getElementById("home"),
            sidenav: document.getElementById("sidenav"),
            backdrop: document.getElementById("backdrop")
        });

        /*document.getElementById("menu-toggle").addEventListener("click", function (e) {
            if (!$scope.sidenav.isOpened) {
                $scope.sidenav.open(); // or sidenav.close
            } else {
                $scope.sidenav.close();
            }
        });*/

        jQuery('#menu-toggle').click(function () {
            jQuery('#menu-toggle #nav-icon1').toggleClass('open');
            if (!$scope.sidenav.isOpened) {
                $scope.sidenav.open(); // or sidenav.close
            } else {
                $scope.sidenav.close();
            }
        });
    };

    //INITIALIZE SCROLL REVEAL
    $scope.initializeScrollReveal = function () {
        window.sr = ScrollReveal({
            viewFactor: 0.1,
        });
        sr.reveal('.timeline-event');
        sr.reveal('h1');
        //sr.reveal('h2');
        sr.reveal('h3');
        sr.reveal('#fun .section .content');
        sr.reveal('#contact .section .content');
    };

    //INITIALIZE WINDOW SCROLL
    $scope.initializeWindowScroll = function () {
        jQuery(window).resize(function () {
            $scope.windowWidthMobile = (jQuery(window).width() <= 800);
        });

        //f  mobile, change scrollspy offset
        if ($scope.windowWidthMobile) {
            jQuery('.scrollspy').scrollSpy({
                scrollOffset: 60
            });
        }

        //If desktop, do scroll recaculations
        if (!$scope.windowWidthMobile) {
            jQuery(window).scroll(function () {
                var scrollPosition = jQuery(window).scrollTop();

                if (jQuery('#home-bg').height() - scrollPosition >= 125) {
                    jQuery("#home").css({
                        "transform": "translate3d(0px," + (scrollPosition / 5) + "px, 0px)"
                    });

                    jQuery(".portrait-frame").css({
                        "width": 250 - (scrollPosition / 4.13) + "px",
                        "height": 250 - (scrollPosition / 4.13) + "px",
                        "bottom": -(scrollPosition / 10) - 480 + "px"
                    });
                } else {
                    jQuery(".portrait-frame").css({
                        "width": "125px",
                        "height": "125px",
                    });
                }
                if ((jQuery('#home-bg').height() - jQuery(this).scrollTop()) <= 300 && (jQuery('#home-bg').height() - jQuery(this).scrollTop()) >= -50) {
                    jQuery("#home-bg img").css({
                        "filter": "blur(" + ((scrollPosition / 15) - 20) + "px)"
                    });

                } else {
                    jQuery("#home-bg img").css({
                        "filter": "blur(0px)"
                    });
                }

            });
        }
    };

    //initializeMusicPlayer
    /*$scope.initializeMusicPlayer = function () {
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
    };*/

    //CHANGE BACKGROUND ON ALL PLACES
    $scope.changeBackground = function (bgItem) {
        //Change letter colors
        angular.forEach($('.page-title span'), function (letter) {
            $scope.randomColor = $scope.colorArray[Math.floor(Math.random() * $scope.colorArray.length)];
            $(letter).css('color', $scope.randomColor);
        });
        $('#home').css('box-shadow', '0px 5px 10px white');
        //transiotjion home img src change
        $('#home-bg img').fadeOut(function () {
            $(this).attr('src', bgItem.imgUrl).fadeIn();
            $('.page-title span').css('color', 'white');
            $('#home').css('box-shadow', '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)');
        });
        angular.element(document.querySelector('header .navbar-fixed nav')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
        angular.element(document.querySelector('footer.page-footer')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
        angular.element(document.querySelector('.submit-btn')).css('background-image', 'url(' + bgItem.imgBlurUrl + ')');
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
}]);
