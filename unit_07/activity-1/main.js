var paletteElements = document.getElementsByClassName("palette");
var blackBox = document.getElementById("blackBox");

for (var palette of paletteElements) {
    palette.addEventListener("mouseover", function() {changeColor(this.classList[1])});
}

function changeColor(color) {
    blackBox.classList.replace(blackBox.classList[1], color);
}