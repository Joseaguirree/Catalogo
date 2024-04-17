// Selecciona todas las imágenes pequeñas
const smallImages = document.querySelectorAll('.small-images img');
// Selecciona la imagen principal
const mainImg = document.getElementById('mainImg');

// Añade un evento clic a cada imagen pequeña
smallImages.forEach(img => {
    img.addEventListener('click', () => {
        // Cambia la imagen principal a la imagen clicada
        mainImg.src = img.src;
    });
});
