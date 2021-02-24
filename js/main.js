$(function () {
    $('.top__slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        fade: true,
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1
        
    });
});