`
<div id="calculator">
    <input readonly ="display">
    <div id="keys">
        <button onclick="appendToDisplay('+')">+</button>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('-')">-</button>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('*')">*</button>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('/')">/</button>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="appendToDisplay('.')">.</button>
        <button onclick="calculate()">=</button>
        <button onclick="clearDisplay()">C</button>
    </div>
</div>
`

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
        // takes an expresion and gets a result
    } catch(error) {
        display.value = "Error.";
    }
}