const menu = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-menu');

function menuToggle() {
    menu.classList.toggle("fa-times");
    mobileMenu.classList.toggle("show-mobile-menu");
}

menu.addEventListener('click', menuToggle);
