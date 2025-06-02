// js/projectModal.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = modal.querySelector('.modal-close-btn');
    const projectDetailBtns = document.querySelectorAll('.project-details-btn');

    projectDetailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.project-card');
            const imgSrc = card.querySelector('.project-thumbnail').src;
            const title = card.querySelector('.project-title').textContent;
            const fullDescriptionHTML = card.querySelector('.project-description-full').innerHTML; // Включаючи посилання

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.innerHTML = fullDescriptionHTML; // Встановлюємо HTML

            // Оновлення посилання в модальному вікні, якщо воно є
            const projectLinkElement = card.querySelector('.project-description-full a');
            if (projectLinkElement && projectLinkElement.href) {
                modalLink.href = projectLinkElement.href;
                modalLink.style.display = 'inline-block'; // Показуємо кнопку, якщо є посилання
            } else {
                modalLink.style.display = 'none'; // Ховаємо кнопку, якщо посилання немає
            }

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закриття модального вікна при кліку поза ним
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Закриття модального вікна клавішею Escape
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});