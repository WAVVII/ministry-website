const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');
const close = document.querySelector('closeme')
const loader = document.querySelector('.loader');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
        ? 'close'
        : 'menu';

    mobile_menu.classList.toggle('is-open');
})

var btn = $("#button");

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
    btn.addClass("show");
    } else {
    btn.removeClass("show");
    }
});

btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});


window.addEventListener('load', () => {

    // Making 5s delay in website loading
    setTimeout(() => {

        loader.classList.add('fadeOut');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);

    }, 5000);

});