/*** SKRIVET AV JAKOB & LARS. BASERAT PÅ SHADOW-BOX ***/

// scrolling shadow effect
var rotateConf = [{
    selector: '#spotlight1'
    , start: -190
    , end: -45
}, {
    selector: '#spotlight2'
    , start: -170
    , end: -150
}, {
    selector: '#spotlight3'
    , start: -140
    , end: -10
}, {
    selector: '#spotlight4'
    , start: -270
    , end: -200
}, {
    selector: '#spotlight5'
    , start: -120
    , end: -80
}, {
    selector: '#spotlight6'
    , start: -170
    , end: -80
}, {
    selector: '#spotlight7'
    , start: -170
    , end: -220
}];

function updateParallax2() {
    $("#4 .scroll-motion-container").each(function (idx) {
        var selector = rotateConf[idx].selector;
        var height = $(this).height();
        var bottom = $(this).offset().top + height;
        var top = $(this).offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop() + windowHeight;
        var fromTop = $(window).scrollTop() - top;

        if ((5 * bottom > $(window).scrollTop()) && (top < scrollTop)) {
            var percent = ((scrollTop - top) / (height + windowHeight));
            var startingRotate = rotateConf[idx].start; // Starting angle of shadow
            var endingRotate = rotateConf[idx].end; // Ending angle of shadow
            var shadowRotate = (startingRotate - endingRotate) * (1 - percent) + endingRotate;
            /*if (shadowRotate >= endingRotate) {
                shadowRotate = endingRotate - shadowRotate % endingRotate;
            }
            if (shadowRotate < startingRotate) {
                shadowRotate = startingRotate;
            }*/


            $(this).find(selector).css({
                '-webkit-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find(selector).css({
                '-moz-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find(selector).css({
                '-ms-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find(selector).css({
                '-o-transform': 'rotate(' + shadowRotate + 'deg)'
            });
            $(this).find(selector).css({
                'transform': 'rotate(' + shadowRotate + 'deg)'
            });
        }
    });
}

updateParallax2();

$(window).scroll(function () {
    updateParallax2();
});