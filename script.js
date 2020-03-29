//Nav: https://codepen.io/ig_design/pen/omQXoQ

(function ($) {
    "use strict";

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    //Animation

    $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
    });

    //Menu On Hover

    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

})(jQuery);



//fadein/out under scroll: https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win

$(window).on("load", function () {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round((1 / animation_height) * 10000) / 10000;

        $('.fade').each(function () {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if (objectTop < windowBottom) {
                if (objectTop < windowBottom - animation_height) {
                    $(this).css({
                        transition: 'opacity 1s linear',
                        opacity: 1
                    });

                } else {
                    $(this).css({
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    });
                }
            } else {
                $(this).css('opacity', 0);
            }
        });
    }
    $('.fade').css('opacity', 0);
    fade();
    $(window).scroll(function () {
        fade();
    });
});


//Instagram feed:

/* Start Instagram Deed  */
(function ($) {
    $(window).on("load", function () {
        $.instagramFeed({
            username: "pretail_cocktail",
            container: ".instagram-feed",
            display_profile: true,
            display_biography: true,
            display_gallery: true,
            callback: null,
            styling: true,
            items: 9,
            items_per_row: 3,
            margin: 1
        });
    });
})(jQuery);
/* End Instagram Feed */
