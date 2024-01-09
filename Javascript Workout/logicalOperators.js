// logical operators - &&; ||; !
// && = logical and = and
// || = logical or = or
// ! = logical not = not

const temp = 25;
 
if(temp > 0 || temp <= 30) { 
    // if temp is more than 0 OR temp is less or equalt to,
    console.log("The weather is bad"); // <- output this
} else {
    console.log("The weather is good");
}
//////////////////////////////////////////
const isSunny = true;

if(!isSunny) {
    console.log("It is Cloudy");
} else {
    console.log("It is Sunny");
}
