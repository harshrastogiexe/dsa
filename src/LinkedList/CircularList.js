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

  get head() {
    return this.head;
  }
}

function nextGreater(array = []) {
  const list = new CircularList();
  array.forEach((val) => list.push(val));

  if (!list.head) return [];
  if (!list.head.next) return [-1];

  const output = [];
  let current = list.head;

  list.traverse((val) => {
    let nextNode = current.next;
    while (nextNode !== current)
      if (nextNode.data > val) {
        output.push(nextNode.data);
        current = current.next;
        return;
      } else nextNode = nextNode.next;

    current = current.next;
    output.push(-1);
  });

  return output;
}
console.time('Time');
const result = nextGreater([1, 5, 12, 10, 0]);
console.timeEnd('Time');

console.log(result);
