class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularList {
  head = null;
  traverse(callback) {
    if (!this.head) return;
    let current = this.head;
    do {
      callback(current.data);
      current = current.next;
    } while (current !== this.head);
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      node.next = node;
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next !== this.head) tail = tail.next;

    node.next = this.head;
    this.head = node;
    tail.next = this.head;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      node.next = node;
      this.head = node;
    }

    let current = this.head;
    while (current.next !== this.head) current = current.next;

    node.next = this.head;
    current.next = node;
  }

  remove() {
    if (!this.head) return;
    if (this.head.next === this.head) return (this.head = null);
    let current = this.head;
    while (current.next !== this.head) current = current.next;
    current.next = this.head.next;
    this.head = this.head.next;
  }

  pop() {
    if (!this.head) return;
    if (this.head.next === this.head) return (this.head = null);
    let prev = this.head;
    let current = this.head.next;

    while (current.next !== this.head) {
      prev = current;
      current = current.next;
    }
    prev.next = this.head;
  }
}

const list = new CircularList();
list.push('(');
list.push(')');

list.pop();
list.pop();

list.traverse(console.log);
