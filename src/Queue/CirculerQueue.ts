class Block<T> {
  data: T;
  next: Block<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}

class CirculerQueue<T> {
  private head: Block<T> | null = null;
  private tail: Block<T> | null = null;
  _size = 0;

  private increase() {
    this._size++;
  }

  private decrease() {
    this._size--;
  }

  enQueue(data: T) {
    const block = new Block(data);

    if (!this.head || !this.tail) {
      this.head = this.tail = block;
      this.tail.next = this.head;
      this.increase();
      return;
    }

    block.next = this.tail.next;
    this.tail.next = block;
    this.tail = block;
    this.increase();
  }

  deQueue(): T | undefined {
    if (!this.head || !this.tail) return;
    const { data } = this.head;
    if (this.head.next === this.head) {
      this.head = this.tail = null;
      this.decrease();
      return data;
    }
    this.head = this.head.next;
    this.tail.next = this.head;
    this.decrease();
    return data;
  }

  get isEmpty() {
    return this.head === null;
  }

  reverse() {
    if (this.isEmpty) return;
    if (this.size === 1) return;

    let prev = this.head;
    let current = this.head!.next;
    let next = current!.next;
    do {
      current!.next = prev;

      prev = current;
      current = next!;
      next = current.next;
    } while (current !== this.head);

    [this.head, this.tail] = [this.tail, this.head];
    this.tail!.next = this.head;
  }

  get front() {
    return this.tail?.data;
  }

  get size() {
    return this._size;
  }

  view() {
    if (!this.head) return;
    let current: Block<T> | null = this.head;
    let output = [];
    do {
      output.push(current!.data);
      current = current && current.next;
    } while (current !== this.head);
    console.log(output.join('->'));
  }
}
