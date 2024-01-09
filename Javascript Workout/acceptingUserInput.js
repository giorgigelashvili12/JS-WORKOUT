// let userName;
// userName = window.prompt("What's your username?"); window prompt = input() in python
// console.log(userName);
// popup

`
inner html - console acceptance

<h1>Welcome</h1>
<label>Username:</label>
<input id="text">
<button id="submit">Submit</button>
`
// let username;

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("text").value;
//     console.log(username)
// }
`
<h1 id="h1">Welcome</h1>
<label>Username:</label>
<input id="text">
<button id="submit">Submit</button>
`
let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("h1").textContent = `Hello, ${username}`;
}