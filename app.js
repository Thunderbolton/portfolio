const menu = document.querySelector('.fa-bars');

function menuToggle() {
    menu.classList.toggle("fa-times");
}

menu.addEventListener('click', menuToggle);
