// This is a code of how to calculate
// the total of products for online shop
// for example:

((2095 + 799) * 0.1) / 100
// 2.894, now we have to make the total 2.84

Math.round((2095 + 799) * 0.1) 
// gotta round the number, 
// it will output 289 cents,

Math.round((2095 + 799) * 0.1) / 100
// output: 2.89
// converts total correctly, You're done!

///////////////////////////////
 // lesson takeaways: Math.round()
 // the code roundes (amrgvalebs) number
 // This function Returns the value of a number rounded
 // to the nearest int
 // can use google for examples or AI tools to understand better

 // We learned:
 // Numbers and Math
 // Order of Operations and brackets and etc.
 // Calculated the number in final project
 // calculations using floats can be inaccurate
 // Math.round()
 // How to search for code on our own
////////////////////////////////////////

// allert code
alert('hello my brothers!!');
// popup message displaying 'hello my brothers!!'

/////////////////////////////////
// Exercises:
// At a restaurant, you order 1 soup for 10$, 3 burgers for 8$ each
// and 1 ice cream for 5$. Use js to calculate the total of this order\
Math.round((1 * 30)+(3 * 8)+(1 * 5))
//  1, 3 and 1 mean how much "food" we want to buy
//  30, 8 and 5 are prices for only 1 of the meal
//  So we multiply them together, to round the total,
//  We will use Math.round()
//  Total/Output: 59 ($)

// You're at a restaurant with 2 friends, 3 in total, and make
// the same order as in the first question:
// 1 soup for 10$, 3 burgers for 8$ each and 1 ice cream for 5$.
// Calculate how much each person pays
Math.round((1 * 30)+(3 * 8)+(1 * 5)) // me
Math.round((1 * 30)+(3 * 8)+(1 * 5)) // friend 1
Math.round((1 * 30)+(3 * 8)+(1 * 5)) // friend 2

// Calculate the total of a toaster ($18.50) and 
// 2 shirts ($7.50 each).
Math.round(18.50 + (7.50 * 2))
// total $34

// REMINDER!!!!!!!!!!!!
// for taxes: 1% = 1 / 100, 20% = 20 / 100 = 0.2
// Calculate 20% taxes for total in third question
Math.round((18.50 + (7.50 * 2) * 0.2) / 100)
// idk not the right answer sadly

////////////////////////////////////////////////
// We can convert Temperatures from celcius to farenheit
// Fahrenheit = (Celsius * 9 / 5)
// Celsius = (Fahrenheit - 32) * 5 / 9

// Challange Exersizes:
// Celcius - 25C, calculate in Fahrenheit - 77
(77 - 32) * 5 / 9
// 25F

// Fahrenheit - 86F, calculate in Celsius - 30C
(30 * 9 / 5)
// 54C