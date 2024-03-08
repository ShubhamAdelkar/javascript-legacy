class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const node = new Node(4);
console.log(node.data);
console.log(node.next);

export default Node;
