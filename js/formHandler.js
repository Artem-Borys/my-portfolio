// js/formHandler.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const nameField = document.getElementById('name'); // Додано для повноти
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successMessageDiv = document.getElementById('form-success-message');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Валідація E-mail
        const emailValue = emailField.value.trim();
        if (!validateEmail(emailValue)) {
            emailError.textContent = 'Будь ласка, введіть коректний e-mail.';
            emailField.style.borderColor = '#e74c3c'; // червоний
            isValid = false;
        } else {
            emailError.textContent = '';
            emailField.style.borderColor = 'var(--border-color)';
        }

        // Валідація тексту повідомлення (не порожнє)
        const messageValue = messageField.value.trim();
        if (messageValue === '') {
            messageError.textContent = 'Будь ласка, введіть ваше повідомлення.';
            messageField.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            messageError.textContent = '';
            messageField.style.borderColor = 'var(--border-color)';
        }

        // Валідація імені (не порожнє)
        const nameValue = nameField.value.trim();
        if (nameValue === '') {
            // Можна додати nameError елемент в HTML
            // console.error('Ім\'я не може бути порожнім');
            nameField.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
             nameField.style.borderColor = 'var(--border-color)';
        }


        if (isValid) {
            const formData = {
                name: nameValue,
                email: emailValue,
                message: messageValue,
                timestamp: new Date().toISOString()
            };

            // Збереження даних у localStorage
            try {
                // Зберігаємо як масив об'єктів, щоб можна було додавати нові
                let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
                submissions.push(formData);
                localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

                // Виведення підтвердження
                successMessageDiv.textContent = 'Дякуємо! Ваше повідомлення збережено локально.';
                successMessageDiv.style.display = 'block';
                contactForm.reset(); // Очистити форму

                // Сховати повідомлення через деякий час
                setTimeout(() => {
                    successMessageDiv.style.display = 'none';
                }, 5000);

            } catch (error) {
                console.error('Помилка збереження в localStorage:', error);
                successMessageDiv.textContent = 'Сталася помилка при збереженні. Спробуйте пізніше.';
                successMessageDiv.style.color = '#e74c3c';
                successMessageDiv.style.display = 'block';
            }
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});