// callback = a function is passed as an argument to another function

// used to handle asynchorunous operations:
//      1. Reading a file
//      2. Network request
//      3. Interacting with databases
hello(leave); // goodbye not outputed

function hello(callback) {
    console.log("Hello!");
    callback();
}
function leave() {
    console.log("Leave pls");
}
function goodbye() {
    console.log("Goodbye!");
}