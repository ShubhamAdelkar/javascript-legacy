class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
}

const stack = new Stack();
stack.push(2);
console.log(stack.pop());
stack.push(3);
console.log(stack.items);
module.exports = Stack;
