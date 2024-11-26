// import Splide from '@splidejs/splide';
// import '@splidejs/splide/css';


document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type   : 'loop',
        padding: '5rem',
        perPage: 3,
        gap    : '1rem',
    });

    splide.mount();
});