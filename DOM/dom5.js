function changeColor() {
    var move = document.getElementById("mydiv");
    var randomColor = getRandomColor();
    move.style.backgroundColor = randomColor;
}

function getRandomColor() {
    var colornumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var color = '#';

    for (var i = 0; i < 6; i++) 
        color += colornumber[Math.floor(Math.random() * 16)];

    console.log(color);
    
    return color;
}