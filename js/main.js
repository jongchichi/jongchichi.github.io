import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    autoHeight: true,
    simulateTouch: true,

    loop: false,

    pagination: {
    el: '.swiper-pagination',
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    scrollbar: {
    el: '.swiper-scrollbar',
    },
});

window.addEventListener('load', function (){
    setTimeout(function (){
        const intro = document.getElementById('intro')
        intro.classList.add('hide')

        setTimeout(function() {
            intro.style.display = 'none'
        }, 1000)
    }, 1000)
})
