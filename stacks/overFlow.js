const MAX_STACK_SIZE = 2;

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    if (this.items.length === MAX_STACK_SIZE) {
      throw Error("Stack Overflow!");
    }
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
stack.push(4);
stack.push(5);
console.log(stack.items);
export default Stack;
