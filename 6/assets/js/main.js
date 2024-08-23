/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLinks.forEach( item => item.addEventListener('click', linkAction));



/*=============== SWIPER CLOTHING ===============*/
let swiperImages = new Swiper('.home__swiper', {
    loop : true,
    grabCursor : true,
    slidesPerView : 'auto',

    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints : {
        768 : {
            slidesPerView : 3,
            centeredSlides : 'auto'
        },
        1152 : {
            centeredSlides : 'auto',
            spaceBetween : -64
        }
    }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)





/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = new ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    // reset : true,
})

sr.reveal('.home__swiper, .home__footer')
sr.reveal('.home__circle', {scale : 1.5, delay : 300})
sr.reveal('.home__subcircle', {scale : 1.5, delay : 500})
sr.reveal('.home__title', {scale : 1, origin : 'bottom', delay : 1200})
sr.reveal('.swiper-button-prev, .swiper-button-next', {origin : 'bottom',})