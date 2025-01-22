const stars = document.querySelectorAll('.star');
        const ratingValue = document.getElementById('rating-value');
        let selectedRating = 0; // Храним текущую оценку
    
        stars.forEach((star) => {
            star.addEventListener('mouseover', () => {
                resetStars();
                highlightStars(star.dataset.value);
            });
    
            star.addEventListener('click', () => {
                selectedRating = star.dataset.value;
                ratingValue.textContent = `Оценка: ${selectedRating}`;
            });
    
            star.addEventListener('mouseout', () => {
                resetStars();
                if (selectedRating) highlightStars(selectedRating);
            });
        });
    
        function highlightStars(value) {
            stars.forEach((star) => {
                if (star.dataset.value <= value) {
                    star.classList.add('active');
                }
            });
        }
    
        function resetStars() {
            stars.forEach((star) => {
                star.classList.remove('active');
            });
        }
 

    const reviewInput = document.getElementById('review-input');
    const submitButton = document.getElementById('submit-review');
    const thankYouMessage = document.getElementById('thank-you-message');
    const writeAgainButton = document.getElementById('write-again');

    // Обработчик для отправки отзыва
    submitButton.addEventListener('click', () => {
        const reviewText = reviewInput.value.trim();

        if (reviewText) {
            reviewInput.style.display = 'none'; // Скрываем поле ввода
            submitButton.style.display = 'none'; // Скрываем кнопку отправки
            thankYouMessage.style.display = 'block'; // Показываем сообщение благодарности
        } else {
            alert('Пожалуйста, напишите отзыв перед отправкой!');
        }
    });

    // Обработчик для кнопки "Написать еще раз"
    writeAgainButton.addEventListener('click', () => {
        reviewInput.value = ''; // Очищаем поле ввода
        reviewInput.style.display = 'block'; // Показываем поле ввода
        submitButton.style.display = 'block'; // Показываем кнопку отправки
        thankYouMessage.style.display = 'none'; // Скрываем сообщение благодарности
    });
    
