window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__ul'),
    menuItem = document.querySelectorAll('.menu__li'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu__ul_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu__ul_active');
        })
    })
})