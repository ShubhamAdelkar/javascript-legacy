// 1. Parent Class (The Foundation)
class Vehicle {
  constructor(wheels, color) {
    this.wheels = wheels;
    this.color = color;
  }

  startEngine() {
    console.log("Vroom!");
  }
}

// 2. Child Class (Extends the Foundation)
class Car extends Vehicle {
  // <-- Uses the 'extends' keyword
  constructor(color, doors) {
    // Must call super() FIRST in the child's constructor
    // It passes 'wheels' (which is always 4 for a Car) and 'color' to the parent's constructor
    super(4, color); // <-- Calls Vehicle's constructor with specific arguments
    this.doors = doors;
  }

  // You can add brand new methods
  honk() {
    console.log("Beep beep!");
  }
}

const myCar = new Car("red", 4);

console.log(`My car is ${myCar.color} and has ${myCar.doors} doors.`);
// Prints: My car is red and has 4 doors.

myCar.startEngine(); // Inherited from Vehicle. Prints: Vroom!
myCar.honk(); // New method. Prints: Beep beep!
