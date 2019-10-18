var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

})

$('.swiper-container').on('mouseenter', function () {
    mySwiper.autoplay.stop();
    showElement($('.swiper-button-prev,.swiper-button-next'))
}).on('mouseleave', function () {
    mySwiper.autoplay.start();
    hideElement($('.swiper-button-prev,.swiper-button-next'))
})

function hideElement(e) {
    e.removeClass('show').addClass('hide')
}

function showElement(e) {
    e.removeClass('hide').addClass('show')
}