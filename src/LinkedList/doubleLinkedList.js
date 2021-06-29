class Node {
  next = null;
  prev = null;
  constructor(data) {
    this.data = data;
  }
}

class DoubleList {
  head = null;
  tail = null;
  size = 0;

  display(reverse = false) {
    const output = [];
    this.traverse((val) => output.push(val), reverse);
    console.log(output.join('<->'));
  }

  traverse(callback, reverse = false, requireNode = false) {
    if (!this.head) return;
    let current = reverse ? this.head : this.tail;
    let direction = reverse ? 'next' : 'prev';

    while (current) {
      if (requireNode) callback(current);
      else callback(current.data);
      current = current[direction];
    }
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.size++;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = this.tail = node;
      this.size++;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  pop() {
    if (!this.head) return;

    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.size--;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
  }

  remove() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.size--;
      return;
    }

    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  search(callback, node = false) {
    let current = this.head;
    while (current) {
      if (callback(current.data)) return node ? current : current.data;
      current = current.next;
    }
    return null;
  }

  insertSorted(data) {
    const node = new Node(data);
    if (!this.head) return (this.head = this.tail = node);

    let current = this.head;
    if (this.head.data < data) {
      console.log('jk');
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      return;
    }
    while (current.next.data <= data) current = current.next;
    console.log(current.data);
  }
}

const list = new DoubleList();

list.push(10);
list.push(20);
list.push(30);
list.push(30);
list.push(50);

list.insertSorted(0);
list.display();

// console.log({ size: list.size });
// console.log(list);
// list.traverse(console.log, false, trucoe);
// list.traverse(console.log);
// list.traverse(console.log, true);
