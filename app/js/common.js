// sliders
$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.about-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.partners-slider').slick({
    variableWidth: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 1024) {
        $('.useful-publications-slider:not(.slick-initialized)').slick({
            infinite: true,
            arrows: false,
            slidesToShow: 3,
        });
    } else {
        $(".useful-publications-slider.slick-initialized").slick("unslick");
    }
});
// slick active


$(window).on("load", function () {
    $(".mCustomScrollbar-wrap").mCustomScrollbar({
        scrollButtons: {
            enable: true
        }
    });
});

$(document).on("click", '.dropdown-menu', function (e) {
    e.stopPropagation();
});

$('.btn-add-favorite').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});

$(document).ready(function () {

    $(".menu-navigation__item.js-tab-trigger").hover(function () {
        let id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.btn-close-submenu').css('display', 'flex');

        $('.overlay-bg').fadeIn();

        $('.js-tab-trigger').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content').removeClass('active'); // 3
        content.addClass('active'); // 4
    });


    $(".menu-navigation-submenu .js-tab-trigger").hover(function () {
        let id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');


        $('.menu-navigation-submenu .js-tab-trigger').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.dropdown-submenu-level').removeClass('active'); // 3
        content.addClass('active'); // 4
    });


    $('.btn-close-submenu, .overlay-bg').on('click', function (e) {
        e.preventDefault();
        $('.js-tab-content').removeClass('active');
        $('.js-tab-trigger').removeClass('active');
        $('.btn-close-submenu').css('display', 'none');
        $('.overlay-bg').fadeOut();
    });

});


$('[name="phone"]').mask('+7 (999) 999 - 99 - 99');


$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.header-top').addClass('fixed');
    } else {
        $('.header-top').removeClass('fixed');
    }
});

