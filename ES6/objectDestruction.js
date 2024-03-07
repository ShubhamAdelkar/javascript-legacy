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

// destructing nested objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: lowToday, high: highThisday },
} = LOCAL_FORECAST;
console.log(lowToday);
console.log(highThisday);

// ES5
const user = { name: "John Doe", age: 34 };
const name = user.name;
const age = user.age;
console.log(name);
console.log(age);
