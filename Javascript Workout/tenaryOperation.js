// tenary operator = a shortcut to if{} and else{} statements, helps to assign
//                   a variable based on a condition
//                       ? if code is true this : if not this
let age = 25;
let message = age >= 18 ? "You are an adult" : "You are a minor";
                            // if true this        if not this
// same as
if(age >= 18) {
    message = "You are an adult";
} else {
    message = "You are a minor";
}
/////////////////////////////////////////////////
let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
/////////////////////////////////////////////////
let isStudent = true;
let message1 = isStudent ? "You are a student" : "You are not a student";
/////////////////////////////////////////////////
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);