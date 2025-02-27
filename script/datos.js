document.addEventListener('DOMContentLoaded', () => {
  const datosAnimales = {
    manta: { nombre: "Mantaraya", velocidad: 70, peso: 500, esperanza: 40 },
    pezGlobo: {  nombre: "Pez Globo", velocidad: 30, peso: 200, esperanza: 30 },
    tortuga: { nombre: "Tortuga", velocidad: 40, peso: 800, esperanza: 80 }
  };

  const maximos = {
    velocidad: 100,
    peso: 1000,
    esperanza: 100
  };

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

  function actualizarBarras(data) {
    document.getElementById('valorVelocidadMin').textContent = `${data.velocidad} km/h`;
    document.getElementById('valorPesoMin').textContent = `${data.peso} kg`;
    document.getElementById('valorEsperanzaMin').textContent = `${data.esperanza} años`;

    animarBarras(data);
    document.querySelector('.animal-name').textContent = data.nombre;
  }

  function animarYActualizarDatos(animalKey) {
    const data = datosAnimales[animalKey];
    actualizarBarras(data);
  }

  window.animarYActualizarDatos = animarYActualizarDatos;
});
