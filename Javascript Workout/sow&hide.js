const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    if(myImg.style.visibility === 'hidden') {
        myImg.style.visibility === 'visible';
        myButton.textContent = 'hide';
    } else {
        myImg.style.visibility = "hidden";
        myButton.textContent = "show";
    }
    // visibility for the img to leave some space if button is after the img
});