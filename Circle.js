const Shape = require("./moveShape");

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  // store radius on this
  this.radius = radius;
}

const circle = new Circle(5, 30, 8);

console.log(circle.position.x);
console.log(circle.position.y);
console.log(circle.radius);
module.exports = Circle;
