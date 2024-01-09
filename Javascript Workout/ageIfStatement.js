`
inner HTML code

<label>Enter Your Age:</label>
<input type="text" id="myText">
<button type="submit" id="submit">Submit</button>
<p id="resultElement"> </p>
`
const myText = document.getElementById("myText");
const submit = document.getElementById("submit");
const resultElement = document.getElementById("resultElement");
let age = 0;

submit.onclick = function() {
    age = myText.value;
    age = Number(age);
    if(age >= 18) {
        resultElement.textContent = 'You are old enough to enter this site';
    } else {
        resultElement.textContent = 'Must be 18+ to enter';
    }
}