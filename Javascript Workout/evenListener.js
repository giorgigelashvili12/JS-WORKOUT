// eventListener = Listen for specific events to create interactive pages.
// events: click, mouseover, mouseout
const myBox = document.getElementById("myBox");

function changeColor(event) {
    event.target.style.BackgroundColor = "potato";
}