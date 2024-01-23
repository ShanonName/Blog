// Obtener el elemento contenedor
var container = document.querySelector('.container');

// Crear un número limitado de globos
var numBalloons = 100;

for (var i = 0; i < numBalloons; i++) {
    // Crear un nuevo globo
    var balloon = document.createElement('div');
    balloon.className = 'animation';
    balloon.id = 'balloons';
    balloon.style.backgroundImage = "url('imgs/balloons.gif')";
    //balloon.style.animationName = "balloonsAnimation";
    balloon.style.width = '50px';
    balloon.style.height = '50px';
    balloon.style.animationTimingFunction = "linear"; /* Función de temporización lineal para movimiento uniforme */
    balloon.style.animationIterationCount = "infinite"; /* Repetir la animación infinitamente */
    balloon.style.zIndex = 0;
    var randomHue = Math.floor(Math.random() * 360); // Generar un valor aleatorio entre 0 y 360
    balloon.style.filter = "hue-rotate(" + randomHue + "deg)";
    // Posicionar el globo de manera aleatoria
    balloon.style.top = Math.random() * 100 + 'vh';
    balloon.style.left = Math.random() * 100 + 'vw';
    
    // Agregar el globo al contenedor
    container.appendChild(balloon);
    animateBalloon(balloon)
}

function animateBalloon(balloon) {
    var initialPosition = Math.random() * 100 + 'vw'; // Posición inicial aleatoria en el eje vertical
    balloon.style.left = initialPosition; // Establecer la posición inicial del globo
    var duration = Math.random() * 5000 + 5000; // Duración aleatoria entre 1000ms y 6000ms

    // Animar el globo
    balloon.animate([
        { transform: 'translateY(100vh)' }, // Mover hacia abajo
        { transform: 'translateY(-500px)' } // Subir
    ], {
        duration: duration, // Duración de la animación en milisegundos
        iterations: Infinity // Repetir la animación infinitamente
    });
}

