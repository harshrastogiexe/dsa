class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  _recursiveTraverse(callback) {
    if (!callback && !typeof callback === 'function') throw new Error('No Function Passed');
    const traverse = (current = this.head) => {
      if (current === null) return;
      callback(current.data);
      traverse(current.next);
    };
  }

  traverse(callback, recursive = false) {
    if (!callback && !typeof callback === 'function') throw new Error('No Function Passed');
    if (recursive) return this._recursiveTraverse(callback);

    let current = this.head;
    while (current !== null) {
      callback(current.data);
      current = current.next;
    }
  }

  search(callback) {
    if (!callback && !typeof callback === 'function') throw new Error('No Function Passed');

    let current = this.head;
    while (current !== null) {
      if (callback(current.data)) return current.data;
      current = current.next;
    }
    return null;
  }

  add(data) {
    const node = new Node(data);
    if (this.head === null) return (this.head = node);

    node.next = this.head;
    this.head = node;
  }

  push(data) {
    const node = new Node(data);
    if (this.head === null) return (this.head = node);

    let current = this.head;
    while (current.next !== null) current = current.next;
    current.next = node;
  }

  delete() {
    if (!this.head) return null;
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;

    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    if (prev === null) return (this.head = null);
    prev.next = null;
  }

  insertAt(position, data) {
    let current = this.head;
    let curentPosition = 0;
    if (position === 0) return this.add(data);

    while (current.next !== null) {
      if (curentPosition + 1 === position) {
        const node = new Node(data);
        node.next = current.next;
        current.next = node;
      }
      current = current.next;
      curentPosition++;
    }
    if (position > curentPosition) return false;
  }

  insertSorted(data) {
    const node = new Node(data);
    if (!this.head) return (this.head = node);

    if (node.data < this.head.data) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data <= data) current = current.next;
    node.next = current.next;
    current.next = node;
  }

  getMiddle() {
    let slowPtr = this.head;
    let fastPtr = this.head;
    if (!this.head) return this.head;
    if (!this.head.next) return this.head;

    while (fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }

    return slowPtr.data;
  }

  fromLast(n = 1) {
    let firstPtr = this.head;
    let secondPtr = this.head;

    while (n-- > 0 && secondPtr) {
      secondPtr = secondPtr.next;
    }

    while (secondPtr) {
      firstPtr = firstPtr.next;
      secondPtr = secondPtr.next;
    }

    return secondPtr.data;
  }

  reverse() {
    if (!this.head || !this.head.next) return;

    let prev = this.head;
    let current = this.head.next;

    if (!current.next) {
      current.next = prev;
      this.head = current;
      prev.next = null;
      return;
    }
    prev.next = null;
    while (current) {
      let next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new List();

list.insertSorted(10);
list.insertSorted(20);
list.insertSorted(30);
// list.insertSorted(40);
// list.insertSorted(50);

// console.log({ middle: list.getMiddle() });
list.reverse();
list.traverse(console.log);
// console.log(list.search((data) => true));
