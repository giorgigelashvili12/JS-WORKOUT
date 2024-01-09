const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// how to generate random number
let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNan(guess)) {
        window.alert(`Please enter a valid number.`);
        // if string put in will alert this
        // isNaN() returns true if a value is NaN:
    } else if(guess < minNum || guess > maxNum) {
        console.log(`Please enter a valid number.`);
        // if less than 1 or more than 100 console log this
    } else {
        attempts++;
        if(guess < answer) {
            window.alert("Too low! try again.");
        } else if(guess > answer) {
            window.alert("Too high! try again.");
        } else {
            window.alert(`Congragulations! You won! the answer was ${answer}. it took you ${attempts} attempts.`);
        }
    }
    running = false;
}