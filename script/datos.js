document.addEventListener('DOMContentLoaded', () => {
  const datosAnimales = {
    manta: { velocidad: 70, peso: 500, esperanza: 40 },
    pezGlobo: { velocidad: 30, peso: 200, esperanza: 30 },
    tortuga: { velocidad: 40, peso: 800, esperanza: 80 }
  };

  const maximos = {
    velocidad: 100,
    peso: 1000,
    esperanza: 100
  };

  function animarValores(nuevosValores) {
    anime({
      targets: ['#velocidadValor', '#pesoValor', '#esperanzaValor'],
      innerHTML: function (el) {
        let key = el.id.replace('Valor', '');
        return [parseInt(el.innerHTML) || 0, nuevosValores[key]];
      },
      round: 1,
      easing: 'easeInOutQuad',
      duration: 800
    });
  }

  function animarBarras(data) {
    anime.timeline()
      .add({
        targets: '#barraVelocidad',
        width: `${(data.velocidad / maximos.velocidad) * 100}%`,
        easing: "easeInOutQuad",
        duration: 95
      }, 0)
      .add({
        targets: '#barraPeso',
        width: `${(data.peso / maximos.peso) * 100}%`,
        easing: "easeInOutQuad",
        duration: 95
      }, 0)
      .add({
        targets: '#barraEsperanza',
        width: `${(data.esperanza / maximos.esperanza) * 100}%`,
        easing: "easeInOutQuad",
        duration: 95
      }, 0);
  }

  function actualizarBarrasYValores(data) {
    document.getElementById('valorVelocidadMin').textContent = `${data.velocidad} km/h`;
    document.getElementById('valorPesoMin').textContent = `${data.peso} kg`;
    document.getElementById('valorEsperanzaMin').textContent = `${data.esperanza} años`;

    animarBarras(data);
  }

  function animarYActualizarDatos(animalKey) {
    const data = datosAnimales[animalKey];
    animarValores(data);
    actualizarBarrasYValores(data);
  }

  window.animarYActualizarDatos = animarYActualizarDatos;
});
