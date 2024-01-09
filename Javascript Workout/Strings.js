// Strings, how to work with text
// String = text (ofc)
'hello' // string

// alert code that we learned before:
alert('WASSUP')
// 'WASSUP' is a string popup
// Undefined

'some' + 'text'
'sometext' // combines strs into a bigger str
// Combining strs - Concetenation
// if we add spaces in the end there will be spaces between

typeof 2
'type - number'

typeof 'quote'
'type - string'
// tells us the value

'hello' + 3
// this is called type coersion
// possible in js unlike in py
////////////////////////////////////////
// to define total in dollars, we can make:
'$' + 28.94
// There ya go!
"$28.94"
// this is not possible, cuz you cant calculate
// what now is known as a string
// but if we make:
'$' + 20.95 + 7.99
//this will output
'$20.957.99'
// js adds from left to right
// this happened, because when we convert
// string with number, the number automatically
// changes the value to str, so if we calculate like this:
'$20.95' + 7.99
// Same procces happenes here.
// We have to combine $ symbol and total
// to control this, remember Order of Operations
// 1. (Parentheses) 2. * and / 3. + and  -, so we will do:
'$' + (20.95 + 7.99)
// This tells the computer to combine the numbers first,
// cuz () have more value than others.
// but we get $28.939999999998
// Best way to calculate is first to calculate in cents and then dollars
// we will do:
'$' + (2095 + 799) / 100
// gives the rounded number :D

// Now we can output:
// items (2): $28.94 - calculated
// shipping: $0.00
// total before tax: $28.94
// tax (10%): $2.89
// total: CALCULATE YOURSELF
'Items (2)' // Quantity of num of products

'Items (' + (1 + 1) + ')' // Math is the way
// from virgin to pro (not really - yet.)
'Items (' + (1 + 1) + '): $' 
// We getting there slowely.
'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
// MATH IS THE WAY!! and knowledge too-
// We break the strings and add the total part

// Let's make a popup which displays this code
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100)
// just copy man, no need to work hard
// displays the final line of the 2 product total
// Thats the way we use strings
// We can also make advanced calculations
/////////////////////////////////////////////////////////
// This file is about strings so hang in there for a sec
// There are 3 ways to create a string:
// 1. single quotes ''
// 2. double quotes ""
// in js '' is recomended, but "" are useful too, for example:
//  'I'm learning Javascript' TOTAL ERROR MAN I' closes it
// we gotta use:
    "I'm Learning Javascript" // SEE??
// FINAL 
// characters:
// letters, numbers, symbols and esxape letters like \ and '
// so look:

'I\m learing Javascript'
// is same as
"I'm learning Javascript"
// also \n, escape newline character
// creates a new line of text

alert('some\ntext')
// utput: some
//        text

// so the 3rd way of creating strs is `` (backticks)
`Hello man!` // still a string
// SO COOL :OOO

// the first feature of template strings in called interpolation
// let's us insert a value into a string
'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
// we created this using concatenation,
// there's also another way
// interpolation is an easier way
`Items (${1 + 1})` 
// inserted quantity in brackets
// same as:
'Items (2)'
// les go on
`Items (${1 + 1}): $${(2095 + 799) / 100}` 
// LOOKS SO COOL DO DIS
// yeah same as:
'Items (2): $28.94'
// interpolation in recommended and also the easiest way
////////////////////////////////////////////////////
// Multi-Line strings:
`some
text`
// this is called multi-lined string
// same as 
'some\ntext'
// cool feature
// Strings
let firstName = "Bro";
let favFood = "Pizza";
let email = "Pak@gmail.com"
console.log(`You like ${favFood}`);
console.log(`Your email is ${email}`);