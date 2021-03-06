(function ($) {
    $(document).ready(function () {


        /* - SHADOW BOX
        ---------------------------------------------- */
        Shadowbox.init();


        /* - AVATAR ANIMATIONS
        ---------------------------------------------- */
        $leftEye = $('.left-eye');
        $rightEye = $('.right-eye');

        $rightEyebrow = $('.right-eyebrow');
        $leftEyebrow = $('.left-eyebrow');

        $rightEye.css('transform-origin', '50% 50%');
        $leftEye.css('transform-origin', '50% 50%');

        var delay = Math.floor(Math.random() * 6000) + 4000;


        function blink() {
            $rightEye.velocity({
                scaleY: 0.2
            }, {
                delay: 500,
                duration: 0
            });
            $leftEye.velocity({
                scaleY: 0.2
            }, {
                delay: 500,
                duration: 0
            });
            $rightEye.velocity({
                scaleY: 1
            }, {
                delay: 200,
                duration: 0
            });
            $leftEye.velocity({
                scaleY: 1
            }, {
                delay: 200,
                duration: 0
            });

            $rightEye.velocity({
                scaleY: 0.2
            }, {
                delay: 100,
                duration: 0
            });
            $leftEye.velocity({
                scaleY: 0.2
            }, {
                delay: 100,
                duration: 0
            });
            $rightEye.velocity({
                scaleY: 1
            }, {
                delay: 200,
                duration: 0
            });
            $leftEye.velocity({
                scaleY: 1
            }, {
                delay: 200,
                duration: 0
            });

        }
        var blinking = setInterval(blink, delay);

        $('a.logo svg').on('mouseenter', function () {
            $rightEyebrow.velocity({
                translateY: -10
            }, {
                delay: 0,
                duration: 300
            });
            $leftEyebrow.velocity({
                translateY: 2.5
            }, {
                delay: 0,
                duration: 300
            });
        });
        $('a.logo svg').on('mouseleave', function () {
            $rightEyebrow.velocity({
                translateY: 0
            }, {
                delay: 0,
                duration: 200
            });
            $leftEyebrow.velocity({
                translateY: 0
            }, {
                delay: 0,
                duration: 200
            });
        });


        /* - POPUP
        ---------------------------------------------- */
        $('.popup').popup({
            outline: false, // optional
            focusdelay: 300, // optional
            opacity: 0.7
        });


        /* - PORTFOLIO BROWSER FRAME
        ---------------------------------------------- */
        $('.work-single .browser').each(function () {
            $(this).prepend('<div class="chrome"><span class="address-bar"></span><div class="buttons"><span class="b-button"></span><span class="b-button"></span><span class="b-button"></span></div></div>');
        });



    });
}(jQuery));