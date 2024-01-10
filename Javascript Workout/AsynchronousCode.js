// synchronous = Executes line by line consecutively in a sequential manner
// code that waits for an operation to complete

// asynchronous= allows multiple operations to be performed concurretly without waiting
// doesn't block the execution flow and allows the program to continue
// (Input/Output operations, nextwork requests, fetching data)
// Handled with: Callbacks, promises, async/await

// anynchronous code
function func1() {
    setTimeout(() => {console.log("Task 1")}, 3000);
}
function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}