// js/mobileMenu.js
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenuBtn = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link'); // Для закриття меню при кліку на посилання

    if (burgerMenuBtn && navMenu) {
        burgerMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            burgerMenuBtn.classList.toggle('active');
            const isExpanded = burgerMenuBtn.getAttribute('aria-expanded') === 'true' || false;
            burgerMenuBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // Закриття меню при кліку на посилання в мобільній версії
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    burgerMenuBtn.classList.remove('active');
                    burgerMenuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});