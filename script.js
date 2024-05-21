const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

function moveButton(button) {
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));
    
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

yesButton.addEventListener('mouseover', () => moveButton(yesButton));

noButton.addEventListener('click', () => { 
    alert("¡Cuando alguien me amaba...me sentia tan feliz! 😢"); 
});
