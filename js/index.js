//Based on the Scroller function from @sallar
var $content = $('header .content')
    , $blur = $('header .overlay')
    , wHeight = $(window).height();

$(window).on('resize', function () {
    wHeight = $(window).height();
});

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function Scroller() {
    this.latestKnownScrollY = 0;
    this.ticking = false;
}

Scroller.prototype = {

    init: function () {
        window.addEventListener('scroll', this.onScroll.bind(this), false);
        $blur.css('background-image', $('header:first-of-type').css('background-image'));
        console.log("ffff");
    },


    onScroll: function () {
        this.latestKnownScrollY = window.scrollY;
        this.requestTick();
    },


    requestTick: function () {
        if (!this.ticking) {
            window.requestAnimFrame(this.update.bind(this));
        }
        this.ticking = true;
    },

    update: function () {
        var currentScrollY = this.latestKnownScrollY;
        this.ticking = false;


        var slowScroll = currentScrollY / 2
            , blurScroll = currentScrollY * 3
            , opaScroll = 1.4 - currentScrollY / 1350;
        if (currentScrollY > (wHeight * 0.7))
            $('nav').css('position', 'fixed');
        else
            $('nav').css('position', 'absolute');

        $content.css({
            'transform': 'translateY(' + slowScroll + 'px)',
            '-moz-transform': 'translateY(' + slowScroll + 'px)',
            '-webkit-transform': 'translateY(' + slowScroll + 'px)',
            'opacity': opaScroll
        });

        $blur.css({
            'opacity': blurScroll / wHeight
        });
    }
};


var scroller = new Scroller();
scroller.init();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});