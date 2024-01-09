// INNER HTML CODE
`
<label id="countLabel">0</label><br>
<div id="btnContainer">
    <button id="decreaseBtn">decrease</button>
    <button id="resetBtn">reset</button>
    <button id="increaseBtn">increase</button>
</div>
`
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
// adds 1 while increase button is clicked
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
// takes 1 while decrease button is clicked
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}