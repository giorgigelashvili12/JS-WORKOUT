let x; // declaration 
let y;

// 2nd way
x = 123; // assignment
console.log(x);

////
let age = 25; // number
let price = 10.99; // float
let gpa = 2.1; // float
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
// const = variable that can't be changed
const name = 'Giorgi';
// can't change variable 'name'
//radius programme
`
inner html

<h1>Enter radius of a circle</h1>
<label>Radius:</label>
<input id="text">
<button id="submit">Submit</button>
<h3 id="h3"> </h3>
`
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("text").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("h3").textContent = circumference + "cm";
}