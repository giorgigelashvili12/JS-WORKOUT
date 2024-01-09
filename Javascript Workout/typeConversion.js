// change datatype of a value to another (strings, integers, booleans)
let age = window.prompt("How old are you?"); // window prompt = input() in python
age = Number(age); // changing age to a number
age += 1;
console.log(age, typeof age);

let x = 'pizza';
let y = 'pizza';
let z = 'pizza';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN, number
console.log(y, typeof y); // pizza, string
console.log(z, typeof z); // true, boolean

// Number() = int()
// String() = str()
// Boolean() = bool()
