// destructing = extract values from arrays and objects, then assign
//               them to variables in a convenient way.

//  [] = to perform array destructing
//  {} = to perform object destructing

//  5 examples
// ------------------- EXAMPLE 1 --------------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];
// 1st side array
// 2nd side destructuing
// a now = 2, b = 1

// ------------------- EXAMPLE 2 --------------------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
// swaping red and white

// ------------------- EXAMPLE 3 --------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colorsTwo = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colorsTwo;
// firstColor - red
// secondColor - green
// thirdColor - blue
// extracolors - [black, white], new array of remaining colors

// ------------------- EXAMPLE 4 --------------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Giorgi",
    lastName: "Gelashvili",
    age: 30,
    job: "none",
}
const person2 = {
    firstName: "Goal",
    lastName: "Orientaze",
    age: 30,
}

const {firstName, lastName, age, job} = person1;
// Giorgi, Gelashvili, 30, none
// person2 job = undefined
// so write in array: job = "Discord Custom Bot"

// ------------------- EXAMPLE 5 --------------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1)
// use objects in exp 4