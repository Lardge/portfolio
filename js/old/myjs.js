//SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('.timeline');
sr.reveal('.bar');
//$(document).ready(function () {
angular.element(document).ready(function () {
    //Fade in images
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
        //$('img').addClass("opacity-1");
        //$('img').addClass("smooth-entry-reverse");
    }, 10);
});
//TIMELINE
angular.element(document).ready(function () {
    var timelineBlocks = $('.cd-timeline-block');
    var offset = 0.8;
    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);
    //on scolling, show/animate timeline blocks when enter the viewport
    jQuery(window).on('scroll', function () {
        (!window.requestAnimationFrame) ? setTimeout(function () {
            showBlocks(timelineBlocks, offset);
        }, 100): window.requestAnimationFrame(function () {
            showBlocks(timelineBlocks, offset);
        });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function () {
            (jQuery(this).offset().top > jQuery(window).scrollTop() + jQuery(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function () {
            (jQuery(this).offset().top <= jQuery(window).scrollTop() + jQuery(window).height() * offset && jQuery(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
});

function startLoop() {
    if (myInterval > 0) clearInterval(myInterval); // stop
    myInterval = setInterval("doSomething()", iFrequency); // run
}
//Sets equal height for the image boxes
function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
        var thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}

function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
        var thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
    group.width("auto");
}
// scrolling shadow effect
function updateParallax() {
    $(".scroll-motion-container").each(function () {
        var height = $(this).height();
        var bottom = $(this).offset().top + height;
        var top = $(this).offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop() + windowHeight;
        var fromTop = $(window).scrollTop() - top;
        if ((2 * bottom > $(window).scrollTop()) && (top < scrollTop)) {
            var percent = ((scrollTop - top) / (height + windowHeight));
            var startingRotate = -125; // Starting angle of shadow
            var endingRotate = -30; // Ending angle of shadow
            var shadowRotate = (startingRotate - endingRotate) * (1 - percent) + endingRotate;
            if (shadowRotate < startingRotate) {
                shadowRotate = startingRotate
            }
            $(this).find('.shadow-box .shadow').css({
                '-webkit-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find('.shadow-box .shadow').css({
                '-moz-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find('.shadow-box .shadow').css({
                '-ms-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find('.shadow-box .shadow').css({
                '-o-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find('.shadow-box .shadow').css({
                'transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find('.shadow-box .shadow').css({
                'opacity': (1.1 / percent) - 0.9
            });
        }
    });
}
updateParallax();
$(window).scroll(function () {
    updateParallax();
});
/* Check in view */
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            setTimeout(function () {
                $element.addClass('cont-spin')
            }, 1000);
        }
        else {
            $element.removeClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
/*
	Plugin: Pinned
	Author: Drew Dahlman ( www.drewdahlman.com )
	Version: 0.0.2
*/
(function ($) {
    $.fn.pinned = function (options, pinning, unpinned) {
        var defaults = {
            bounds: '0px'
            , scrolling: '0px'
            , mobile: false
        }
        if (pinning && unpinned) {
            var callback = {
                pinning: pinning
                , unpinned: unpinned
            }
        }
        return this.each(function () {
            var settings = $.extend(defaults, options);
            var callbacks = $.extend(callback, pinning, unpinned);
            var $this = $(this);
            var orig = $this.css('top');
            $this.data('pinned', true);
            var pinnedTimeout = 0;

            function init() {
                if (isMobile() && settings.mobile == false || !isMobile()) {
                    windowScroll();
                }
                else {
                    mobileScroll();
                }
            }
            windowScroll = function () {
                    if ($this.data('pinned')) $(window).scroll(function () {
                        if ($(window).scrollTop() > settings.bounds && $this.css('position') != 'fixed') {
                            $this.css({
                                'position': 'fixed'
                                , 'top': settings.scrolling
                            });
                            if (callbacks.pinning != null) {
                                callbacks.pinning();
                            }
                        }
                        if ($(window).scrollTop() < settings.bounds && $this.css('position') != 'absolute') {
                            $this.css({
                                'position': 'absolute'
                                , 'top': orig
                            });
                            if (callbacks.unpinned != null) {
                                callbacks.unpinned();
                            }
                        }
                    });
                }
                // TODO - Add better support for mobile devices on scroll
            mobileScroll = function () {
                if ($this.data('pinned', true)) $(window).bind('touchmove', function () {
                    if ($(window).scrollTop() > settings.bounds && $this.css('position') != 'fixed') {
                        $this.css({
                            'position': 'fixed'
                            , 'top': settings.scrolling
                        });
                    }
                    if ($(window).scrollTop() < settings.bounds && $this.css('position') != 'absolute') {
                        $this.css({
                            'position': 'absolute'
                            , 'top': orig
                        });
                    }
                });
            }
            isMobile = function () {
                if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
                    return true;
                }
                else {
                    return false;
                }
            }
            init();
        });
    };
})(jQuery);
//EASE IN THE COAST
function easeInThenCoast() {
    var width = 960
        , height = 500;
    var svg = d3.select("body").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var gearBig = svg.append("g").datum({
        teeth: 32
        , radius: height * 2 / 5
    }).attr("transform", "translate(" + -height * 1 / 5 + ",0)").append("g").attr("class", "gear");
    gearBig.append("path").style("fill", "gray").attr("d", pathGear);
    gearBig.append("path").style("fill", "black").style("fill-opacity", .3).attr("d", d3.svg.arc()({
        innerRadius: 20
        , outerRadius: height * 2 / 5 - 8
        , startAngle: 0
        , endAngle: Math.PI
    }));
    var gearSmall = svg.append("g").datum({
        teeth: 16
        , radius: -height * 1 / 5
    }).attr("transform", "translate(" + height * 2 / 5 + ",0)").append("g").attr("class", "gear");
    gearSmall.append("path").style("fill", "brown").attr("d", pathGear);
    gearSmall.append("path").style("fill", "black").style("fill-opacity", .3).attr("d", d3.svg.arc()({
        innerRadius: 20
        , outerRadius: height * 1 / 5 - 8
        , startAngle: -Math.PI
        , endAngle: 0
    }));
    var gear = svg.selectAll(".gear");
    d3.selectAll("input").data([ease = easeReflect(easeAccelerateThenCoast(1.5), .5), d3.ease("cubic-in-out"), d3.ease("linear")]).on("change", function (d) {
        ease = d;
        loop();
    }).call(loop);

    function loop() {
        d3.transition().duration(10000).ease(ease).each(function () {
            gear.transition().attrTween("transform", function (d) {
                return tweenRotate(360 * 32 * 3 / d.teeth * (d.radius < 0 ? -1 : +1));
            });
        }).transition().duration(500).each("end", loop);
    }

    function tweenRotate(angle) {
        var i = d3.interpolateNumber(0, angle);
        return function (t) {
            return "rotate(" + i(t) + ")";
        };
    }

    function pathGear(d) {
        var n = d.teeth
            , r2 = Math.abs(d.radius)
            , r0 = r2 - 8
            , r1 = r2 + 8
            , r3 = d.annulus ? (r3 = r0, r0 = r1, r1 = r3, r2 + 20) : 20
            , da = Math.PI / n
            , a0 = -Math.PI / 2 + (d.annulus ? Math.PI / n : 0)
            , i = -1
            , path = ["M", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)];
        while (++i < n) path.push("A", r0, ",", r0, " 0 0,1 ", r0 * Math.cos(a0 += da), ",", r0 * Math.sin(a0), "L", r2 * Math.cos(a0), ",", r2 * Math.sin(a0), "L", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0), "A", r1, ",", r1, " 0 0,1 ", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0), "L", r2 * Math.cos(a0 += da / 3), ",", r2 * Math.sin(a0), "L", r0 * Math.cos(a0), ",", r0 * Math.sin(a0));
        path.push("M0,", -r3, "A", r3, ",", r3, " 0 0,0 0,", r3, "A", r3, ",", r3, " 0 0,0 0,", -r3, "Z");
        return path.join("");
    }
    // Like in-out reflection, except around the specified center.
    // If center = .5, this is the same as in-out reflection.
    function easeReflect(ease, center) {
        return function (t) {
            return t < center ? center * ease(t / center) : 1 - ease((1 - t) / (1 - center)) * (1 - center);
        };
    }
    // Constant acceleration followed by constant speed.
    // If acceleration = 1, this is the same as quadratic easing.
    // If acceleration = Infinity, this is the same as linear easing.
    function easeAccelerateThenCoast(acceleration) {
        if (acceleration < 1) throw new Error("unpossible");
        if (!isFinite(acceleration)) return d3.ease("linear");
        var speed = 2 * (acceleration - Math.sqrt((acceleration - 1) * acceleration))
            , t0 = speed / 2 / acceleration;
        return function (t) {
            return t < t0 ? acceleration * t * t : speed * t - speed + 1;
        };
    }
}