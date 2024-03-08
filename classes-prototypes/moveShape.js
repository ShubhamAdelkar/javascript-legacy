class Shape {
  constructor(x, y) {
    // store x and y in this.position
    this.position = { x: x, y: y };
  }
  move(x, y) {
    this.position.x += x;
    this.position.y += y;
  }
}


const shape = new Shape(5, 10);

shape.move(3, 5);

console.log(shape.position.x);
console.log(shape.position.y);

export default Shape;


// Adding a Method
// Let's make our shape move!

// To add a method to our prototype, we can do this:

// function Shape(x,y) {
//     this.position = { x,y }
// }

// Shape.prototype.move = function(x,y) {
//     // move the shape
// }
// By adding this method to the Shape.prototype object, new instances will be able to access it via the prototype chain.

//  Be careful not to use arrow function syntax here, or this may not be appropriately bound! We want this to be the instance of Shape. With the arrow syntax, it will inherit the context of the scope unless otherwise bound.

//  Your Goal: Add Move Function
// Create a function move that will be added to the Shape.prototype. This function should take two arguments: x and y.

// It should move the shape's position by adding the corresponding arguments value:

// const shape = new Shape(1, 1);

// shape.move(1, 4);

// console.log( shape.position.x ); // 2
// console.log( shape.position.y ); // 5