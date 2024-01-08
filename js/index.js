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

/* JS pro slider pro projekty*/
//slideshow style interval
var autoSwap = setInterval(swap, 7000);

//pause slideshow and reinstantiate on mouseout
$('.carousel, .slider').hover(
    function () {
        clearInterval(autoSwap);
    },
    function () {
        autoSwap = setInterval(swap, 7000);
    });

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel>li').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('.carousel>li').each(function (index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
    var direction = action;

    //moving carousel backwards
    if (direction == 'counter-clockwise') {
        var leftitem = $('.left-pos').attr('id') - 1;
        if (leftitem == 0) {
            leftitem = itemCount;
        }

        $('.right-pos').removeClass('right-pos').addClass('back-pos');
        $('.main-pos').removeClass('main-pos').addClass('right-pos');
        $('.left-pos').removeClass('left-pos').addClass('main-pos');
        $('#' + leftitem + '').removeClass('back-pos').addClass('left-pos');

        startItem--;
        if (startItem < 1) {
            startItem = itemCount;
        }
    }

    //moving carousel forward
    if (direction == 'clockwise' || direction == '' || direction == null) {
        function pos(positionvalue) {
            if (positionvalue != 'leftposition') {
                //increment image list id
                position++;

                //if final result is greater than image count, reset position.
                if ((startItem + position) > resetCount) {
                    position = 1 - startItem;
                }
            }

            //setting the left positioned item
            if (positionvalue == 'leftposition') {
                //left positioned image should always be one left than main positioned image.
                position = startItem - 1;

                //reset last image in list to left position if first image is in main position
                if (position < 1) {
                    position = itemCount;
                }
            }

            return position;
        }

        $('#' + startItem + '').removeClass('main-pos').addClass('left-pos');
        $('#' + (startItem + pos()) + '').removeClass('right-pos').addClass('main-pos');
        $('#' + (startItem + pos()) + '').removeClass('back-pos').addClass('right-pos');
        $('#' + pos('leftposition') + '').removeClass('left-pos').addClass('back-pos');

        startItem++;
        position = 0;
        if (startItem > itemCount) {
            startItem = 1;
        }
    }
}

//next button click function
$('#next').click(function () {
    swap('clockwise');
});

//prev button click function
$('#prev').click(function () {
    swap('counter-clockwise');
});

//if any visible items are clicked
$('.items').click(function () {
    if ($(this).attr('class') == 'items left-pos') {
        swap('counter-clockwise');
    }
    else {
        swap('clockwise');
    }
});