document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card-rotating');
  
    cards.forEach(card => {
        card.addEventListener('focus', () => {
            setTimeout(() => {
              card.querySelector('.card-rotating-inner').classList.add('is-flipped');
            }, 300); // Retraso de 450ms para que coincida con la transición del focus
          });
  
      card.addEventListener('blur', () => {
        card.querySelector('.card-rotating-inner').classList.remove('is-flipped');
      });
    });
  });