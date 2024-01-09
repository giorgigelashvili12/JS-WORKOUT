// string methods = allows you to work and manipulate strings
let userName = "giushaa";
userName.charAt(1); // gets the character at index 1
// same as in python:
// 0 = 1
// 1 = 2
// 2 = 3
// 3 = 4
// 4 = 5
// 5 = 6
// 6 = 7
// 7 = 8
// 8 = 9
// 9 = 10
// 10 = 11
// etc.
userName.indexOf("u"); // gets the index of character "u" (2)
// g i -u- s h a a
// 0 1 -2- 3 4 5 6
// 2(index) = 3(location)
userName.lastIndexOf("a"); // gets index of the last "a" in a variable
// g i u s h a -a-
// 0 1 2 3 4 5 -6-
//              7
userName.length // counts the lenth of a string, same as len() in py
// counting starts from 1
// g i u s h a a
// 1 2 3 4 5 6 7
userName.trim() 
// doesn't output any spaces in a variable
userName.toUpperCase()
// obviously... changes variable to uppercase
userName.toLowerCase()
// mhm opposite here, changes variable to lowercase
userName.repeat() // repeat function
// You should put number in parentethes ()
// Number of how many times should the variable repeat
userName.startsWith(" ") // boolean function
// variable doesn't begin with space so its indeed false
// if it did start with a space it would be true
userName.endsWith(" ")
// opposite fucntion here

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.padStart(15, "0") // or padEnd()
