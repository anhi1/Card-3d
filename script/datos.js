document.addEventListener('DOMContentLoaded', () => {
  // Datos de los animales
  const datosAnimales = {
    manta: { velocidad: 70, peso: 500, esperanza: 40 },
    pezGlobo: { velocidad: 30, peso: 200, esperanza: 30 },
    tortuga: { velocidad: 40, peso: 800, esperanza: 80 }
  };

  // Máximos para las animaciones de barras (valor máximo para cada propiedad)
  const maximos = {
    velocidad: 100, // Máximo de velocidad en km/h
    peso: 1000,     // Máximo de peso en kg
    esperanza: 100  // Máximo de esperanza de vida en años
  };

  // 1) Función para animar los valores de texto
  function animarValores(nuevosValores) {
    anime({
      targets: '#velocidadValor',
      innerHTML: [
        parseInt(document.getElementById('velocidadValor').innerHTML) || 0, // Valor inicial
        nuevosValores.velocidad
      ],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 1000
    });

    anime({
      targets: '#pesoValor',
      innerHTML: [
        parseInt(document.getElementById('pesoValor').innerHTML) || 0, // Valor inicial
        nuevosValores.peso
      ],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 1000
    });

    anime({
      targets: '#esperanzaValor',
      innerHTML: [
        parseInt(document.getElementById('esperanzaValor').innerHTML) || 0, // Valor inicial
        nuevosValores.esperanza
      ],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 1000
    });
  }

  // 2) Función genérica para animar una barra con tiempos diferentes
  function animarBarra(idBarra, valorActual, valorMaximo, tiempo) {
    const porcentaje = (valorActual / valorMaximo) * 100;  // Cálculo del porcentaje

    // Animamos el ancho de la barra desde 0% hasta el porcentaje calculado
    anime({
      targets: `#${idBarra}`,
      width: [`0%`, `${porcentaje}%`],
      easing: "easeInOutQuad",
      duration: tiempo
    });
  }

  // 3) Función que maneja la actualización de las barras y los valores
  function actualizarBarrasYValores(data) {
    // 1. Animar la barra de velocidad (máximo 100 km/h)
    animarBarra('barraVelocidad', data.velocidad, maximos.velocidad, 150);  
    document.getElementById('valorVelocidadMin').textContent = data.velocidad + ' km/h';
    document.getElementById('valorVelocidadMax').textContent = maximos.velocidad + ' km/h'; 

    // 2. Animar la barra de peso (máximo 1000 kg)
    animarBarra('barraPeso', data.peso, maximos.peso, 100);
    document.getElementById('valorPesoMin').textContent = data.peso + ' kg';
    document.getElementById('valorPesoMax').textContent = maximos.peso + ' kg'; 

    // 3. Animar la barra de esperanza de vida (máximo 100 años)
    animarBarra('barraEsperanza', data.esperanza, maximos.esperanza,150);
    document.getElementById('valorEsperanzaMin').textContent = data.esperanza + ' años';
    document.getElementById('valorEsperanzaMax').textContent = maximos.esperanza + ' años';  
  }

  // 4) Función que se llama desde card.js al hacer clic
  function animarYActualizarDatos(animalKey) {
    const data = datosAnimales[animalKey];

    animarValores(data); // Animar los valores numéricos
    actualizarBarrasYValores(data); // Actualizar las barras y valores
  }

  // Exportar la función para que se pueda usar en card.js
  window.animarYActualizarDatos = animarYActualizarDatos; // Función global
});
