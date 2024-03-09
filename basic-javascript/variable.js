// Variables allow computers to store and manipulate data in a dynamic fashion.

// Definign myName variable with var keyword.
var myName;

// variable with value of string datatype.
var myName = "Bachhu";
// console.log logs or print the result on console.
console.log(myName);

var myFirstName = "Shubham";
var myLastName = "Adelkar";
// Using + operator, we can combine varible to print together.
console.log(myFirstName + myLastName);

// assigning value to variable by another variable.
var myNewName;
myNewName = myFirstName;
console.log(myNewName);

// One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:
var camper = "James";
var camper = "David";
console.log(camper);

// A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. its in the ES6 directory.
