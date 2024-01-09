// functions = a section of reusable code. declare code once,
//             or whenever you want. call the function 
//             to execute that code.
function happyBirthday() {
    console.log(`Happy B-Day to you!!!`);
}
// how to execute it:
happyBirthday(); // Done!


function login(username) { // now is defined
    console.log('Enter your user');
    console.log(`Welcome ${username}`); // not defined without them
}
// to define we do this:
login('Giorgi'); // now is defined
//////////////////////////////////////////////////
function addition(x, y) { // x and y are now defined
    let answer = x + y;
    return answer; // now defined (answer)
}
addition(5, 6);
/////////////////////////////////////////
// how to find if number is even
function even(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
    // better version!
    return number % 2 === 0 ? true : false;
}
//////////////////////////////////////////////////
function isValidEmail(email) {
    if(email.includes("@")) {
        return true;
    } else {
        return false;
    }
    // better version!
    return email.includes("@");
}
isValidEmail("GiorgiPro");