var clickCount = 0;
enable = true
const spinSound = new Audio('sounds/slot.mp3');
const winSound = new Audio('sounds/win.mp3');
const player = document.querySelector('midi-player');

function playSpinSound() {
  spinSound.play();
}

// Función para reproducir el sonido de victoria
function playWinSound() {
  winSound.play();
}

function spinLottery() {
    clickCount++;
    if (clickCount > 10) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Reemplaza 'tu-link' con el enlace al que quieres redirigir
    }
    if (enable == false) return 1;
    enable = false;
    playSpinSound();

    if (player.playing == false) player.playButton.click();

    var premioOptions = ["AMOR????", "1 Millon de pesos", "1 Millon de dolares!!", "Una Moto", "Tabla de surf", "Un buen hijo", "Empleado trabajador", "reporte core v3?", "Infobae", "Hola ns que mas poner", "Feliz cumpleanos", "Una xbox series x", "Iphone 15 pro max", "Help", "idk"]; // Opciones de premio
    var premioElement = document.querySelector('.premio'); // Elemento h1 con clase "premio"
    var interval = setInterval(function() {
      var randomIndex = Math.floor(Math.random() * premioOptions.length); // Índice aleatorio
      premioElement.textContent = premioOptions[randomIndex]; // Cambiar el texto del h1

    }, 10); // Cambiar el texto cada 100 milisegundos
  
    setTimeout(function() {
      spinSound.pause();
      spinSound.currentTime = 0;

      clearInterval(interval); // Detener el cambio aleatorio
      premioElement.textContent = "Reporte Core v3 (proximamente)"; // Establecer el premio final
      enable = true; // Habilitar el botón después de que la función spinLottery haya terminado
      playWinSound();
    }, 5000); // Establecer el premio final después de 3000 milisegundos (3 segundos)
  }

document.querySelector('midi-player').style.display = 'none';