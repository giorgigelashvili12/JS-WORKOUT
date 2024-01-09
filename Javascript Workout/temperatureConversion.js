`
inner HTML code

<form>
    <h1>Tempereatore Convertor</h1>
    <input type="number" id="textBox" value="0">

    <input type="radio" id="toFarenheit" name="unit">
    <label for="toFarehnehit">Celcius -> Farenheit</label>

    <input type="radio" id="toCelcius" name="unit">
    <label for="toCelcius">Farenheit -> Celcius</label>

    <button type="submit" onclick="convert()">Submit</button>
    <p id="result"> </p>
`
const textBox = document.getElementById("textBox");
const toFarehnehit = document.getElementById("toFarehnehit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

function convert() {
    if(toFarehnehit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "*F";
    } else if(toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp + "*C";
    } else {
        result.textContent = "Select an unit.";
    }
}
