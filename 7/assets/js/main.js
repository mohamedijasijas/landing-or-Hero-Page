const menu = document.getElementById('menu-icon');
const navList = document.querySelector(".nav__list")

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open')
})