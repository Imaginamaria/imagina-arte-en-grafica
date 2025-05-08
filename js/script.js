// animacion del icono bulb a pincel del index

const icon = document.getElementById('icon');
const icons = ['fa-lightbulb', 'fa-paintbrush'];
let i = 0;

setInterval(() => {
  icon.classList.remove(icons[i % 2]);
  i++;
  icon.classList.add(icons[i % 2]);
}, 2000);


// animacion del texto tipeandose del index

function runTypingEffect() {
  // Definir el texto a escribir
  const text = 'Imagina arte en gráfica.';
  // Obtener el elemento donde se mostrará el texto
  const typingElement = document.getElementById('typing-text');
  // Definir la velocidad de escritura
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

// Función para escribir el texto
// i es el contador de caracteres
function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

// Ejecutar la animación al cargar la página
document.addEventListener('DOMContentLoaded', runTypingEffect);

//barquito

const barquito = document.querySelector('.barquito');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // El barquito se mueve más suavemente y con leve inclinación
  const angle = (x / window.innerWidth - 0.5) * 10;

  barquito.style.transform = `translate(${x}px, ${y * 0.8}px) rotate(${angle}deg)`;
});


