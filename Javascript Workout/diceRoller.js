/* <div id="container">
    <h1>Dice Roller</h1>
    <label># of Dice</label>
    <input type="number" id="numOfDice" value="1" min="1">
    <button onclick="rollDice()">Roll Dice</button>
    <p id="diceResult"> </p>
    <p id="diceImages"> </p>
</div> */

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png alt="${value}"`); // selects images
        // no imaes rn                                  alt if img doesnt display
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}