// IF statments = if a condition is true, execute some code
//                if not do somethng else
let age = 25;
if(age >= 18) {
    console.log("You are old enough to enter this site");
} else {
    console.log("Must be 18+ to enter");
}
/////////////////////////////////////////////////
let time = 9;

if(time < 12) {
    console.log("Good Mornign!");
} else {
    console.log("Good Evening!");
}
///////////////////////////////////////////////////
let isStudent = false;

if(isStudent) {
    console.log("You are a student!");
} else {
    console.log("You are not a student!");
}
//////////////////////////////////////////////////////
let agee = 25;
let hasLisence = false;

if(agee >= 16) {
    console.log("You are old enough to drive!");
    if(hasLisence) {
        console.log("You have a lisence!");
    } else {
        console.log("You do not have a lisence yet!");
    }
} else {
    console.log("You must be old enough to have a lisence");
}
