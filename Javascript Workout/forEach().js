// forEach() = method to iterate over the elements of an array and apply a specified function (callback) to 
//             every element
//                                  -------array.forEach(callback)------
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);

function display(element) {
    console.log(element);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let fruits = ["apple", "banana", "orange", "coconut"];
fruits.forEach(display);

function display(element) {
    console.log(element);
}