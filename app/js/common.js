// sliders
$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});


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

