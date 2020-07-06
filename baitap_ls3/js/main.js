/*zoom hình ảnh product-detail*/
/* global FB, controllerCurrent, actionId */

!function ($) {
    "use strict"; // jshint ;_;
    /* MAGNIFY PUBLIC CLASS DEFINITION
     * =============================== */

    var Magnify = function (element, options) {
        this.init('magnify', element, options);
    };

    Magnify.prototype = {
        constructor: Magnify, init: function (type, element, options) {
            var event = 'mousemove', eventOut = 'mouseleave';
            this.type = type;
            this.$element = $(element);
            this.options = this.getOptions(options);
            this.nativeWidth = 0;
            this.nativeHeight = 0;

            this.$element.wrap('<div class="magnify" \>');
            this.$element.parent('.magnify').append('<div class="magnify-large" \>');
            this.$element.siblings(".magnify-large").css("background", "url('" + this.$element.attr("src") + "') no-repeat");

            this.$element.parent('.magnify').on(event + '.' + this.type, $.proxy(this.check, this));
            this.$element.parent('.magnify').on(eventOut + '.' + this.type, $.proxy(this.check, this));
        }
        , getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay
                    , hide: options.delay
                };
            }

            return options;
        }

        , check: function (e) {
            var container = $(e.currentTarget);
            var self = container.children('img');
            var mag = container.children(".magnify-large");

            // Get the native dimensions of the image
            if (!this.nativeWidth && !this.nativeHeight) {
                var image = new Image();
                image.src = self.attr("src");

                this.nativeWidth = image.width;
                this.nativeHeight = image.height;

            } else {

                var magnifyOffset = container.offset();
                var mx = e.pageX - magnifyOffset.left;
                var my = e.pageY - magnifyOffset.top;

                if (mx < container.width() && my < container.height() && mx > 0 && my > 0) {
                    mag.fadeIn(100);
                } else {
                    mag.fadeOut(100);
                }

                if (mag.is(":visible"))
                {
                    var rx = Math.round(mx / container.width() * this.nativeWidth - mag.width() / 2) * -1;
                    var ry = Math.round(my / container.height() * this.nativeHeight - mag.height() / 2) * -1;
                    var bgp = rx + "px " + ry + "px";

                    var px = mx - mag.width() / 2;
                    var py = my - mag.height() / 2;

                    mag.css({left: px, top: py, backgroundPosition: bgp});
                }
            }

        }
    };

    /* MAGNIFY PLUGIN DEFINITION
     * ========================= */

    $.fn.magnify = function (option) {
        return this.each(function () {
            var $this = $(this)
                    , data = $this.data('magnify')
                    , options = typeof option == 'object' && option;
            if (!data)
                $this.data('tooltip', (data = new Magnify(this, options)));
            if (typeof option == 'string')
                data[option]();
        });
    };

    $.fn.magnify.Constructor = Magnify;

    $.fn.magnify.defaults = {
        delay: 0
    };


    /* MAGNIFY DATA-API
     * ================ */

    $(window).on('load', function () {
        $('[data-toggle="magnify"]').each(function () {
            var $mag = $(this);
            $mag.magnify();
        });
    });

}(window.jQuery);

/* stick-slide */
var checkMobile = function () {
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    return false;
}();

if (!checkMobile) {
    $(document).ready(function () {
//        new StickySidebar('.sticky-sidebar-item', {
//            containerSelector: '#stickySidebar__Container',
//            innerWrapperSelector: '#stickySidebar__Container__Inner',
//            topSpacing: 56
//        });
//       autosize($('.textarea-autosize'));
    });
}

/*dừng video trang chủ*/
$(document).ready(function () {
    $('#youtubeVideo').on('hidden.bs.modal', function () {
        var $this = $(this).find('iframe'),
                tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
    });

    $('#html5Video').on('hidden.bs.modal', function () {
        var html5Video = document.getElementById("htmlVideo");
        if (html5Video != null) {
            html5Video.pause();
            html5Video.currentTime = 0;
        }
    });
});
/*slider reponsive*/
$(document).ready(function () {
    $('#bannerCarousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    $('#singleProductPhotoCarousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
   
    $('#productCarousel').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    $('#productCarousel-designpage').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
    $('#productCarousel1').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });

    // Home Carousel
    $("#homeBannerCarousel.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        stopOnHover: true,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });
	// namecard Carousel
    $("#cardCarousel.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        stopOnHover: true,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
		dots: true,
        transitionStyle: "fade"
    });

    $("#bannerCarousel.owl-carousel.show-04-items, #newsCarousel.owl-carousel.show-04-items").owlCarousel({
        items: 3,
        margin: 0,
        loop: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        navElement: 'div',
        dots: false,
        rewind: true,
        autoplay: false
    });
    $("#productCarousel-designpage.owl-carousel.show-05-items, #productCarousel.owl-carousel.show-04-items, #newsCarousel.owl-carousel.show-04-items").owlCarousel({
        items: 4,
        margin: 0,
        loop: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        navElement: 'div',
        dots: false,
        rewind: true,
        autoplay: false
    });

    $("#productCarousel.owl-carousel.show-05-items,product-dx, #singleProductPhotoCarousel.owl-carousel.show-04-items").owlCarousel({
        items: 5,
        margin: 0,
        loop: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        navElement: 'div',
        dots: false,
        rewind: true,
        autoplay: false
    });

    // Number Input restyle
    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
});
// --
// slick
// -------------------------
var itemSlickOptions = {
    accessibility: true, // Enables tabbing and arrow key navigation
    adaptiveHeight: false, // Enables adaptive height for single slide horizontal carousels
    autoplay: false, // Enables Autoplay
    // autoplaySpeed: 3000
    arrow: true, // Prev/Next Arrows
    // asNavFor: #id,
    // appendArrows: $(element),  // Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
    // appendDots: $(element),    // Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-chevron-right"></i></button>',
    centerMode: false, // Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
    // centerPadding: '50px',     // Side padding when in center mode (px or %)
    cssEase: 'ease-in-out', // CSS3 Animation Easing
    // customPaging: n/a
    dots: false, // Show dot indicators
    dotsClass: 'slick-dots', // Class for slide indicator dots container ('slick-dots')
    draggable: true, // Enable mouse dragging
    fade: false, // Enable fade
    focusOnSelect: false, // Enable focus on selected element (click)
    easing: 'linear', // Add easing for jQuery animate. Use with easing libraries or default easing methods
    // edgeFriction
    infinite: false, // Infinite loop sliding
    initialSlide: 0, // Slide to start on
    // lazyLoad: 
    mobileFirst: false, // Responsive settings use mobile first calculation
    pauseOnFocus: false, // Pause Autoplay On Focus
    pauseOnHover: false, // Pause Autoplay On Hover
    pauseOnDotsHover: false, // Pause Autoplay when a dot is hovered
    // respondTo: 
    // responsive: 
    rows: 1, // Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
    // slide                      // Element query to use as slide
    // slidesPerRow: 
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    swipe: true, // Enable swiping
    swipeToSlide: true, // Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
    touchMove: true, // Enable slide motion with touch
    touchThreshold: 10,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    rtl: false,
    waitForAnimate: true,
    zindex: 999
};

// Open Facebook Chat:
$('body').on('click', '.zone-fb-chat', function () {
    FB.CustomerChat.showDialog();
});

$('body').on('click', '.form-group button[name=\"register-button\"]', function () {
    var _form = $('#form-register'),
            action = _form.attr('action');
    _form.unbind('submit').submit(function (event) {
        $.ajax({
            type: 'post',
            url: action,
            data: new FormData(this),
            processData: false,
            contentType: false,
            success: function (data) {
                $('.form-group:visible').removeClass('has-error');
                $('.help-block:visible').html('');
                if (data.status === 'error') {
                    $.each(data.message, function (key, error) {
                        var errorObject = $('.field-registerform-' + key),
                                errorMessage = errorObject.find('.help-block');
                        if (errorObject.length == 0) {
                            alert(error);
                        } else {
                            errorObject.removeClass('has-success').addClass('has-error');
                            errorMessage.html(error);
                        }
                    });
                }
                if (data.status == 'success') {
                    window.location.href = '/customer/';
                }
            }
        });
        return false;
    });
});

$('body').on('click', '#mc-embedded-subscribe-form button[name=\"sub-mail\"]', function () {
    var _form = $('#mc-embedded-subscribe-form'),
            action = _form.attr('action');
    _form.unbind('submit').submit(function (event) {
        $.ajax({
            type: 'post',
            url: action,
            data: new FormData(this),
            processData: false,
            contentType: false,
            success: function (data) {
                $('#mes-email').html(data['message']);
            }
        });
        return false;
    });
});

$('body').on('click', '#form-forgot button[name=\"forgot-button\"]', function () {
    var _form = $('#form-forgot'),
            action = _form.attr('action');
    _form.unbind('submit').submit(function (event) {
        $.ajax({
            type: 'post',
            url: action,
            data: new FormData(this),
            processData: false,
            contentType: false,
            success: function (data) {
                $('#mes-forgot').html(data['message']);
            }
        });
        return false;
    });
});

$(document).ready(function () {
   setTimeout(function(){
       $.get('/ajax/ajax-loaded-category', {
            controllerName: controllerCurrent,
            actionId: actionId }, function(data){
            $('#ajax-loaded-category').append(data);
            if (checkMobile) {
                $('#btn-cate').addClass('toggle-menu-item');
                $('.ul-lev2').css('display', 'none');
            }
        });
   }, 500);
});
$(document).ready(function(){
    //Handles menu drop down
    $('.dropdown-menu').find('.tootip-reject').click(function (e) {
        e.stopPropagation();
    });
});