const header = document.querySelector("header");

window.addEventListener ("scroll",function (){
    header.classList.toggle ("sticky", windows.scrolly > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('bx-x');
};

const sr = scrollreveal ({
    distance:'25px',
    duration: 2500,
    reset: true,
})

sr.reveal('.services',{delay:190, origin:'bottom'})