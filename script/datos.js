document.addEventListener('DOMContentLoaded', () => {
  // Datos de los animales
  const datosAnimales = {
    manta: { velocidad: 35, peso: 1500, esperanza: 20 },
    pezGlobo: { velocidad: 3, peso: 30, esperanza: 10 },
    tortuga: { velocidad: 40, peso: 200, esperanza: 80 }
  };

  // 1) Función para animar los valores de texto
  function animarValores(nuevosValores) {
    anime({
      targets: '#velocidadValor',
      innerHTML: [
        parseInt(document.getElementById('velocidadValor').innerHTML),
        nuevosValores.velocidad
      ],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 1000
    });

    anime({
      targets: '#pesoValor',
      innerHTML: [
        parseInt(document.getElementById('pesoValor').innerHTML),
        nuevosValores.peso
      ],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 1000
    });

    anime({
      targets: '#esperanzaValor',
      innerHTML: [
        parseInt(document.getElementById('esperanzaValor').innerHTML),
        nuevosValores.esperanza
      ],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 1000
    });
  }

  // 2) Función genérica para animar una barra
  // idBarra: el id del div que hace de barra
  // valorActual: valor numérico del animal (ej. 35)
  // valorMaximo: valor máximo para calcular el % (ej. 50)
  function animarBarra(idBarra, valorActual, valorMaximo) {
    const porcentaje = (valorActual / valorMaximo) * 100;

    // Animamos el ancho de la barra desde 0% hasta porcentaje calculado
    anime({
      targets: `#${idBarra}`,
      width: [`0%`, `${porcentaje}%`],
      easing: 'easeInOutQuad',
      duration: 1000
    });
  }

  // 3) Seleccionamos los botones
  const btns = document.querySelectorAll('.btn-info');

  // 4) Al hacer clic en cada botón, determinamos el animal y animamos
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el click se propague a la card
      const animalKey = btn.getAttribute('data-animal');
      const data = datosAnimales[animalKey];

      // 4.1) Animamos los valores numéricos (velocidad, peso, esperanza)
      animarValores(data);

      // 4.2) Animamos las 3 barras (ajusta los valores máximos a tu gusto)
      // Velocidad: max 50 km/h
      animarBarra('barraVelocidad', data.velocidad, 50);
      document.getElementById('valorVelocidadMin').textContent = data.velocidad + ' km/h';
      document.getElementById('valorVelocidadMax').textContent = '50 km/h';

      // Peso: supongamos un máximo de 2000 kg (o 100 si es "tamaño" en cm)
      // Ajusta según tu necesidad
      animarBarra('barraPeso', data.peso, 2000);
      document.getElementById('valorPesoMin').textContent = data.peso + ' kg';
      document.getElementById('valorPesoMax').textContent = '2000 kg';

      // Esperanza de vida: supongamos un máximo de 100 años
      animarBarra('barraEsperanza', data.esperanza, 100);
      document.getElementById('valorEsperanzaMin').textContent = data.esperanza + ' años';
      document.getElementById('valorEsperanzaMax').textContent = '100 años';
    });
  });
});
