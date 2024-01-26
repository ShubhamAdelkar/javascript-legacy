class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.head = null;
  }
}

const list = new LinkedList(4);
console.log(list.data);
console.log(list.next);
console.log(list.head);

module.exports = LinkedList;
