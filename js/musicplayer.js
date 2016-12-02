var musicplayer = function () {

    var songs = new Array();

    jQuery('.songPlay').each(function () {
        jQuery(this).parents('.collection-item');
        songs.push(jQuery(this));
    });

};

jQuery('document').ready(function () {
    var song = new Audio();

    jQuery('.songPlay').on("click", function () {
        jQuery('.collection-item[status=playing]').attr('status', 'stopped')
        var _this = jQuery(this);
        parent = _this.parents('.collection-item');
        parent.attr('status', 'playing');

        jQuery('.collection-item').not(parent).css({
            "background-color": '#fff',
            'color': '#000',
        })
        parent.css({
            'background-color': '#82b1ff',
            'color': '#fff',
        })

        if (_this.attr('state') == 'stop' || typeof _this.attr('state') === 'undefined') {

            jQuery('#duration').val(0);

            jQuery('.songPlay[state=playing]').text('play_arrow');
            jQuery('.songPlay[state=playing]').attr('state', 'stop');

            _this.attr({
                'state': 'playing'
            })
            _this.text("pause");

            var src = _this.attr('data-link');
            jQuery('#cover').css('background-image', 'url(img/covers/' + _this.attr('cover') + ')');

            jQuery("#play").text('pause_circle_outline');

            song.src = 'mp3/' + src;
            song.volume = 1;
            song.play();


            song.addEventListener('loadedmetadata', function () {

                var title = _this.attr('data-name');
                jQuery('.title').text(title);

                jQuery('#duration').attr('max', song.duration);

                var duration = song.duration;
                jQuery('.duration').text(formatSecondsAsTime(duration));

            });

        } else if (_this.attr('state') == 'playing') {
            jQuery("#play").text('play_circle_outline');
            _this.text('play_arrow');
            song.pause();
            _this.attr({
                'state': 'stop'
            });
        }

    });


    song.addEventListener('timeupdate', function () {
        jQuery(".current").text(formatSecondsAsTime(song.currentTime))
        curtime = parseInt(song.currentTime, 10);
        jQuery("#duration").val(curtime);
    });

    jQuery('#play').on('click', function () {
        var _this = jQuery(this);
        if (_this.text() == 'play_circle_outline') {
            song.play();
            _this.text('pause_circle_outline');
        } else if (_this.text() == 'pause_circle_outline') {
            song.pause();
            _this.text('play_circle_outline');

        }
    });
    var shuffle = 0;
    jQuery('#shuffle').on('click', function () {
        if (shuffle == 0) {
            jQuery(this).css({
                'color': '#ef5350',
            });
            shuffle = 1;
        } else if (shuffle == 1) {
            jQuery(this).css({
                'color': '#fff',
            });
            shuffle = 0;
        }
    });
    var repeat = 0;
    jQuery("#repeat").on('click', function () {
        if (repeat == 0) {
            jQuery(this).text('repeat_one');
            repeat = 1;
        } else if (repeat == 1) {
            jQuery(this).text('repeat');
            repeat = 0;
        }
    });
    jQuery("#next").on('click', function () {
        var _this = jQuery(this);
        if (shuffle == 1) {
            var random = songs[Math.floor(songs.length * Math.random())];
            random.trigger('click');
        } else if (shuffle == 0) {
            var item = jQuery('.collection-item[status="playing"]').next('.collection-item');
            item.find('.songPlay').trigger('click');

        }
    });
    jQuery("#prev").on('click', function () {
        var _this = jQuery(this);
        if (shuffle == 1) {
            var random = songs[Math.floor(songs.length * Math.random())];
            random.trigger('click');
        } else if (shuffle == 0) {
            var item = jQuery('.collection-item[status="playing"]').prev('.collection-item');
            item.find('.songPlay').trigger('click');

        }
    });
    song.addEventListener("ended", function () {
        if (repeat == 1) {
            song.currentTime = 0;
            song.play();
        } else if (repeat == 0) {
            jQuery('#next').trigger('click');
        }
    });
    var volume = 1;
    jQuery('#volume').on('click', function () {
        if (volume == 1) {
            jQuery(this).text('volume_off');
            song.volume = 0;
            volume = 0;
        } else if (volume == 0) {
            jQuery(this).text('volume_up');
            song.volume = 1;
            volume = 1;
        }
    });
    jQuery("#duration").on("change", function () {
        song.currentTime = jQuery(this).val();
        jQuery("#duration").attr("max", song.duration);
    });






    function formatSecondsAsTime(secs) {
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = Math.floor(secs - (hr * 3600) - (min * 60));

        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        return min + ':' + sec;
    }

    jQuery('#fav').on('click', function () {
        color1 = Math.floor((Math.random() * 255) + 1);
        color2 = Math.floor((Math.random() * 255) + 1);
        color3 = Math.floor((Math.random() * 255) + 1);

        color = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';

        jQuery('#fav').queue(function (next) {
            jQuery('#fav').css({
                "transform": "rotate(180deg)",
            });
            next();
        });
        jQuery('#fav').queue(function (next) {
            jQuery('#fav').css('color', color);
            jQuery('#fav').css({
                "transform": " rotate(360deg)",
            });
            next();
        });
        jQuery("#fav").delay(400).queue(function (next) {
            jQuery("#fav").css({
                'transform': 'rotate(0deg)',
            });
            next();
        });

    });
});
