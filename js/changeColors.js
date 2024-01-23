
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeh1ColorRandomly() {
    var h1Elements = document.querySelectorAll('h1.message');
    h1Elements.forEach(function(element) {
        element.style.color = getRandomColor();
    });
}

function changeBackgroundColorRandomly() {
    document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeh1ColorRandomly, 200); // Cambia el color cada 2 segundos
//setInterval(changeBackgroundColorRandomly, 500);