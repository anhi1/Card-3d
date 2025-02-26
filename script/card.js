document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-rotating');

  cards.forEach(card => {
    card.addEventListener('focus', () => {
      setTimeout(() => {
        card.querySelector('.card-rotating-inner').classList.add('is-flipped');
      }, 200); // Ajusta el tiempo si lo consideras necesario
    });

    card.addEventListener('blur', () => {
      card.querySelector('.card-rotating-inner').classList.remove('is-flipped');
    });
  });
});



// card.addEventListener('blur', () => {
//   setTimeout(() => {
//           card.querySelector('.card-rotating-inner').classList.remove('is-flipped');

//   }, 100);
// });
// });
// });
