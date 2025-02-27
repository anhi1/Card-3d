document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-rotating');

  cards.forEach(card => {
    const cardInner = card.querySelector('.card-rotating-inner');
    const btnInfo = card.querySelector('.btn-info');

   
    card.addEventListener('click', () => {
      cardInner.classList.toggle('is-flipped');
    });

  
    btnInfo.addEventListener('click', (e) => {
      e.stopPropagation();
      const animalKey = btnInfo.getAttribute('data-animal');
      animarYActualizarDatos(animalKey);
    });

    card.addEventListener('mouseleave', () => {
      if (cardInner.classList.contains('is-flipped')) {
        cardInner.classList.remove('is-flipped');
      }
    });
  });
});
