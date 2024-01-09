// rest parameters = (...rest) allows a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expans an array into seperate elements
//                   rest = bundles seperate items into an array
function openFridge(...foods) {
    console.log(foods);
}
function getFood(...foods) {
    return foods
}

const food1 = "pizza";
const food2 = "hotdog";
const food3 = "sushi";
const food4 = "hamburger";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);