// Задаем вопрос с помощью confirm
// Проверка возраста
const isAdult = confirm("Ты совершеннолетний?"); // Исправлена опечатка

if (isAdult) {
    console.log(1);
} else {
    const img = document.createElement('img');
    img.src = 'frontend/video/photo_2024-12-13_11-48-10.jpg';
    img.alt = "пофигух";
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    img.onerror = function() {
        console.error('Ошибка загрузки изображения');
    };
    
    document.body.appendChild(img);
}

// Обработчик кнопки
const knop = document.getElementById('knop');
knop.addEventListener('click', function() {
    // Здесь нужно добавить какое-то действие
    console.log('Кнопка нажата');
    // или другой функционал
});