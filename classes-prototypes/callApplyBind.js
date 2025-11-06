const person1 = {
  name: "Alice",
  greeting: function (city) {
    console.log(`Hello, I am ${this.name} from ${city}.`);
  },
};

const person2 = { name: "Bob" }; // Bob doesn't have the greeting method

// 1. call() - Immediate execution, arguments separated
person1.greeting.call(person2, "New York");
// Output: Hello, I am Bob from New York. (Bob "borrows" Alice's method)

// 2. apply() - Immediate execution, arguments in an array
person1.greeting.apply(person2, ["London"]);
// Output: Hello, I am Bob from London.

// 3. bind() - Returns a new function (not executed)
const bobGreeting = person1.greeting.bind(person2, "Paris"); // 'this' is locked to Bob, 'Paris' is a fixed argument
bobGreeting();
// Output: Hello, I am Bob from Paris. (Executed later)
