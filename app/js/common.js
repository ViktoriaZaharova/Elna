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

$('.views-products-slider').slick({
    slidesToShow: 6,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 4,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                arrows: false,
                variableWidth: true,
            }
        }
    ]
});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 1024) {
        $('.useful-publications-slider:not(.slick-initialized)').slick({
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 2,
                        arrows: false,
                    }
                }
            ]
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

    $(".js-tab-trigger-mob").click(function (e) {
        e.preventDefault();
        let id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.btn-close-submenu').css('display', 'flex');

        $('.overlay-bg').fadeIn();

        $('.js-tab-trigger').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content').removeClass('active'); // 3
        content.addClass('active'); // 4
    });

    $('.btn-close-submenu, .overlay-bg').on('click', function (e) {
        e.preventDefault();
        $('.js-tab-content').removeClass('active');
        $('.js-tab-trigger').removeClass('active');
        $('.btn-close-submenu').css('display', 'none');
        $('.overlay-bg').fadeOut();
    });

    $('.btn-filter').on('click', function (e) {
        e.preventDefault();
        $('.overlay-bg').fadeIn().addClass('open');
        $('.sidebar').fadeIn();
    });

    $('.overlay-bg, .sidebar-close').on('click', function (e) {
        e.preventDefault();
        $('.overlay-bg').fadeOut().removeClass('open');
        $('.sidebar').fadeOut();
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


$('.btn-reviews-all').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.modal-content').addClass('active');
    $(this).parents('.reviews-card').addClass('open');
    $(this).hide();
});


$(document).ready(function () {
    $('.slider-range1').slider({
        range: true,
        min: 20000,
        max: 100000,
        values: [0, 100000],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range1").slider("values", 0));
    $(".dec2").val($(".slider-range1").slider("values", 1));


    $('.slider-range2').slider({
        range: true,
        min: 100,
        max: 170,
        values: [0, 120],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec3").val(ui.values[0]);
            //Поле максимального значения
            $(".dec4").val(ui.values[1]);
        }
    });

    $(".dec3").val($(".slider-range2").slider("values", 0));
    $(".dec4").val($(".slider-range2").slider("values", 1));


    $('.slider-range3').slider({
        range: true,
        min: 200,
        max: 300,
        values: [0, 300],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec5").val(ui.values[0]);
            //Поле максимального значения
            $(".dec6").val(ui.values[1]);
        }
    });

    $(".dec5").val($(".slider-range3").slider("values", 0));
    $(".dec6").val($(".slider-range3").slider("values", 1));


    $('.slider-range4').slider({
        range: true,
        min: 50,
        max: 160,
        values: [0, 160],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec7").val(ui.values[0]);
            //Поле максимального значения
            $(".dec8").val(ui.values[1]);
        }
    });

    $(".dec7").val($(".slider-range4").slider("values", 0));
    $(".dec8").val($(".slider-range4").slider("values", 1));

});


$(document).ready(function ($) {
    $('.sidebar-item .list-checkbox').each(function () {
        if ($(this).find('li').length > 5) {
            $(this).find('li').slice(5).hide();
            $(this).parent('.sidebar-item__body').append('<a href="#" class="btn-collapse"><span class="btn-collapse__icon"><svg class="svg-icon"><use xlink:href="img/sprite.svg#plus"></use></svg></span><span class="btn-collapse__text">Показать все</span></a>');
        }
    });

    if ($('.sidebar-item .list-checkbox').find('li').length > 5) {
        $('.btn-collapse').click(function (e) {
            e.preventDefault();
            $('.sidebar-item .list-checkbox li').slideDown();
            $(this).hide();
        });
    }
});


