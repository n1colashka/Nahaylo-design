$(function () {

    var mainSlider = new Swiper('.slider__container', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
        },
        breakpoints: {
            0: {
                centeredSlides: false,
                slidesPerView: 1,
                autoplay: {
                    delay: 2000,
                },
            },
            767: {
                loop: true,
                centeredSlides: true,
                slidesPerView: 3,
                navigation: {
        },
            }
        }
    });
    

});