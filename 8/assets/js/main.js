/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    const navToggleAction = () => {
        navMenu.classList.add('show-menu');
    }
    navToggle.addEventListener('click', navToggleAction);
}

if(navClose){
    const navToggleAction = () => {
        navMenu.classList.remove('show-menu');
    }
    navClose.addEventListener('click', navToggleAction);
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');  
}
navLinks.forEach(item => item.addEventListener('click', linkAction));




/*=============== SWIPER SHOE ===============*/
let swiperShoes = new Swiper('.home__swiper', {
    loop : true,
    spaceBetween : 32,
    grabCursor : true,
    effect : 'creative',
    creativeEffect : {
        prev : {
            translate : [-100, 0, -500],
            opacity : 0,
        },
        next : {
            translate : [100, 0, -500],
            opacity : 0,
        },
    },
    pagination : {
        el : '.swiper-pagination',
        clickable : true
    }
})



/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);