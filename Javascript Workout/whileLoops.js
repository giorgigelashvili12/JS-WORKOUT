// while loops = repeat some code while condition is true
let username = "";

while(username === "" || username === null) {
    username = widnow.prompt(`Enter your name:`)
}
console.log(`Hello ${username}`);

// better version so it doesn't execute prompt infinite times:
do {
    username = window.prompt(`Enter your name:`);
} while(username === "" || username === null)
// then checks the condition in the end. if undefined use
// standart while loop (first one)
/////////////////////////////////////////////////
let loggedIn = false;
let userName;
let password;

while(!loggedIn) {
    userName = window.prompt(`enter your name:`);
    password = window.prompt(`enter your password`);

    if(username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    } else {
        console.log("Invalid credentials!");
    }
} 
// if username not put in and pass put in ,it will output
// console.log("Invalid credentials!");
// if we put in both password and username:
// while(!loggedIn) is ignored