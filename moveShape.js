function Shape(x, y) {
  // store x and y in this.position
  this.position = { x: x, y: y };
}

Shape.prototype.move = function (x, y) {
  this.position.x += x;
  this.position.y += y;
};

const shape = new Shape(5, 10);

shape.move(3, 5);

console.log(shape.position.x);
console.log(shape.position.y);
