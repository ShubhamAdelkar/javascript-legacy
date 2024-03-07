//  ES6 object destructing
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today);
console.log(tomorrow);

// assigning to new variables
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log("new " + highToday);
console.log("new " + highTomorrow);

// ES5
const user = { name: "John Doe", age: 34 };
const name = user.name;
const age = user.age;
console.log(name);
console.log(age);
