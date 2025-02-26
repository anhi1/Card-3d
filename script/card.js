document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-rotating');

  cards.forEach(card => {
    const cardInner = card.querySelector('.card-rotating-inner');
    const btnInfo = card.querySelector('.btn-info');

    // Voltear la tarjeta al hacer clic en la tarjeta
    card.addEventListener('click', () => {
      cardInner.classList.toggle('is-flipped');
    });

    // Mostrar información al hacer clic en el botón
    btnInfo.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el clic se propague y active otros eventos en la tarjeta

      // Obtener el animal desde el atributo 'data-animal' del botón
      const animalKey = btnInfo.getAttribute('data-animal');

      // Llamar a la función para animar y actualizar datos
      animarYActualizarDatos(animalKey);
    });

    // Volver al estado frontal cuando el mouse se aleja de la tarjeta (mouseleave)
    card.addEventListener('mouseleave', () => {
      if (cardInner.classList.contains('is-flipped')) {
        cardInner.classList.remove('is-flipped');
      }
    });
  });
});

// Función que se llama desde card.js al hacer clic
function animarYActualizarDatos(animalKey) {
  const data = datosAnimales[animalKey];

  animarValores(data); // Animar los valores numéricos
  actualizarBarrasYValores(data); // Actualizar las barras y valores
}

// Exportar la función para que se pueda usar en card.js
window.animarYActualizarDatos = animarYActualizarDatos; // Función global