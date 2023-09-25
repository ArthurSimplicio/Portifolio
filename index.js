const navbar = document.querySelector('.media');
displayStyle = window.getComputedStyle(navbar).display;

var mobile = document.querySelector('.mobile-list');
var displayStyle = window.getComputedStyle(mobile).display;

function hamburguer(x) {
    x.classList.toggle("change");


    if (mobile.classList.contains('mobile-list')) {
        mobile.classList.remove('mobile-list')
    } else {
        mobile.classList.add('mobile-list')
    }
    if (navbar.classList.contains('navbar')) {
        navbar.classList.remove('navbar')
    } else {
        navbar.classList.add('navbar')
    }
}

function escrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i );
    });

}
const titulo = document.querySelector('.titulo');
const titulo1 = document.querySelector('.titulo1');
escrever(titulo)

escrever(titulo1)