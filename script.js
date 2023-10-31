const spanElement = document.getElementById('colorChanger');
let colors = ['red', 'blue', 'yellow', 'white', 'black'];
let index = 0;

function changeColor()
{   
    spanElement.style.color = colors[index];
    index = (index + 1) % colors.length;
}

