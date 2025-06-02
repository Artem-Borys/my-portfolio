// js/themeSwitcher.js
const themeSwitcherBtn = document.getElementById('theme-switcher');
const body = document.body;
const lightIcon = themeSwitcherBtn.querySelector('.theme-icon-light');
const darkIcon = themeSwitcherBtn.querySelector('.theme-icon-dark');

// Функція для застосування теми
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        body.classList.remove('dark-mode');
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }
}

// Функція для перемикання теми
function toggleTheme() {
    const currentTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Застосування збереженої теми при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // 'light' за замовчуванням
    applyTheme(savedTheme);

    themeSwitcherBtn.addEventListener('click', toggleTheme);
});