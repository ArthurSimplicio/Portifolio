const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav-menu')
menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
})
const about = document.querySelector('.about1')
const aboutScroll = document.querySelector('#about')
about.addEventListener('click', () => about.scrollTo(aboutScroll))

