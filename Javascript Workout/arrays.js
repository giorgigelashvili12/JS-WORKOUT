// Arrays = a variable like sturcture that can hold more than a 1 value
let fruit = "appple"; // variable - 1 value
let fruit_array = ["apple", "banana", "orange"];

fruit[0] = "coconut";
// first value in array will be "coconut"

// how to access one of the values
console.log(fuit_array[0]);
// outputs apple

fruit_array.push("mango");
// adds value "mango" in the end of the array

fruit_array.pop("mango");
// deletes the last value

fruit_array.shift("mango");
// adds value in the beginning
/////////////////////////////////////////////////////
let numOfFruits = fruit_array.length;
// 4
let index = fruit_array.indexOf("apple");
// finding apple, if element isnt in array it will display -1
for(let i = 0; i < fruit_array.lenth; i++) {
    console.log(fruit_array[i]); // apple and banana
}
////////////////////////////////
fruit_array.sort().reverse();
// values are in reverse