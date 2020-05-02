var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random-picker");


//default value displayed as CSS
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";


//updating the gradient
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomPicker() {
    function generateRandomColor() {
        var hexCode = "#";
        while (hexCode.length < 7) {
            hexCode += (Math.floor(Math.random() * 15)).toString(16);
        }
        return hexCode;
    }
    var hex1 = generateRandomColor();
    var hex2 = generateRandomColor();
    color1.value = hex1;
    color2.value = hex2;
    setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomPicker);



function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "left":
            whatHappens = "you encounter a troll";
            break;
        case "right":
            whatHappens = "you encounter a burdik";
            break;
        case "back":
            whatHappens = "you found a river";
            break;
        default:
            whatHappens = "enter a valid command";
    }
    return whatHappens;
}