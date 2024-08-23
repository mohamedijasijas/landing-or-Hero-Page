/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(item => item.addEventListener('click', linkAction))



/*=============== SWIPER SNEAKERS ===============*/
let swiperImages = new Swiper('.home__swiper', {
    loop : true,
    spaceBetween : 64,
    grabCursor : true,
    centeredSlides : true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination : {
        el : ".swiper-pagination",
        type : 'fraction',
    },

    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    }
})

let swiperTitles = new Swiper('.home__titles', {
    loop : true,
    spaceBetween : 64,
    grabCursor : true,
    
    centeredSlides : true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },

});

swiperImages.controller.control = swiperTitles
swiperTitles.controller.control = swiperImages






/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader);