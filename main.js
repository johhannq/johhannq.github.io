const flowerImages = [
    'img/flower1.png',
    'img/flower1.png',
    'img/flower.png',
    'img/flower.png'
];

const flowerContainer = document.getElementById('flower-container');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    flower.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    flower.style.backgroundImage = `url(${flowerImages[Math.floor(Math.random() * flowerImages.length)]})`;
    flowerContainer.appendChild(flower);

    console.log('Flower created'); // Debugging message
}

function addFlowersPeriodically() {
    createFlower();
}

// Add a new flower every 0.4 seconds
setInterval(addFlowersPeriodically, 150);

// Typing effect for the message
const messageElement = document.querySelector('.message');
const originalMessage = messageElement.textContent;
messageElement.textContent = '';
let index = 0;

function typeMessage() {
    if (index < originalMessage.length) {
        messageElement.textContent += originalMessage.charAt(index);
        index++;
        setTimeout(typeMessage, 100);
    }
}

typeMessage();

console.log('Script loaded'); // Debugging message