const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav-menu')
const home = document.querySelector('#home1')
const about = document.querySelector('#about')
const project = document.querySelector('#projects')
const aboutScroll = document.querySelector('.about')
const projectScroll = document.querySelector('.projects')
const aboutScrollRect = aboutScroll.getBoundingClientRect();
const projectScrollRect = projectScroll.getBoundingClientRect();
home.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}
)

about.addEventListener('click', (e) => {
    e.preventDefault()
    aboutScroll.scrollIntoView({
        top: aboutScrollRect.top,
        behavior: 'smooth',
    })
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}
)
project.addEventListener('click', (e) => {
    e.preventDefault()
    projectScroll.scrollIntoView({
        top: projectScrollRect.top,
        behavior: 'smooth',
    })
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}
)
menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
})