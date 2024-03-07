// single parameter ? "item" : "(item)";
// const doubler = item => item * 2;
const doubler = (item) => item * 2;
console.log(doubler(4));

// double parameter
const multiplier = (item, multi) => item * multi;
console.log(multiplier(5, 6));

// double parameter
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// default parameter 
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting());
console.log(greeting("Vinayak"));

// default parameter
const calculate = (number, value = 1) => number + value;
console.log(calculate(3));
