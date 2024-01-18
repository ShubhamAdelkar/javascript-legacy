// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = { x : x, y : y};
}

const shape = new Shape(5, 10);
console.log(shape.position.x);
console.log(shape.position.y);
