document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    // Mensaje de agradecimiento
    document.getElementById("response").innerText = `¡Gracias, ${name}! Tu mensaje ha sido enviado.`;

    // Limpiar el formulario
    document.getElementById("contact-form").reset();
});

// Función para mostrar un hecho divertido sobre hobbies
document.querySelectorAll(".hobby-item").forEach((item,index) => {
    item.addEventListener("click", () => {
        const funFacts = [
            
"Baila como si nadie te estuviera mirando; cada movimiento cuenta tu historia.",
            "Leer es mi manera de viajar sin salir de casa.",
            "Cantar en karaoke es la mejor terapia.",
            "Viajar es descubrir nuevos mundos.",
            "El estilismo es arte; cada outfit es una nueva obra maestra que creas."
        ];

        const randomFact = funFacts[index];
        alert(randomFact);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hobbyItems = document.querySelectorAll('.hobby-item');
    const phraseDisplay = document.getElementById('phrase-display');

    hobbyItems.forEach(item => {
        item.addEventListener('click', () => {
            const phrase = item.getAttribute('data-phrase');
            phraseDisplay.textContent = phrase;
        });
    });
});

const emojiArray = ['😊', '🐱', '', '', '🌟', '🎈', '💖'];
const emojiContainer = document.querySelector('.emoji-background');

function createFloatingEmoji() {
    const emoji = document.createElement('span');
    emoji.textContent = emojiArray[Math.floor(Math.random() * emojiArray.length)];
    emoji.style.position = 'fixed';
    emoji.style.fontSize = `${Math.random() * 50 + 20}px`; // Tamaño aleatorio
    emoji.style.opacity = Math.random(); // Opacidad aleatoria

    // Posicionamiento aleatorio
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.bottom = '0'; // Comienza fuera de la vista

    emojiContainer.appendChild(emoji);

    // Animación de flotación
    const floatDuration = Math.random() * 3 + 3; // Duración aleatoria entre 3 y 6 segundos
    emoji.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-100vh)', opacity: 0 }
    ], {
        duration: floatDuration * 900,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    // Eliminar el emoji después de la animación
    setTimeout(() => {
        emoji.remove();
    }, floatDuration * 2000);
}

// Crear emojis cada segundo
setInterval(createFloatingEmoji, 1000);

const hobbyItems = document.querySelectorAll('.hobby-item');
const phraseDisplay = document.getElementById('phrase-display');

hobbyItems.forEach(item => {
    item.addEventListener('click', () => {
        const phrase = item.getAttribute('data-phrase');
        phraseDisplay.textContent = phrase;
    });
});
