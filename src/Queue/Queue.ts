class Queue<T> {
  private container: T[] = [];
  private _size = 0;

  isEmpty() {
    return this._size === 0;
  }

  private increaseSize() {
    this._size++;
  }

  private decreaseSize() {
    this._size--;
  }

  enQueue(data: T) {
    this.container.push(data);
    this.increaseSize();
  }
  deQueue() {
    const data = this.container.shift();
    this.decreaseSize();
    return data;
  }

  front() {
    return this.container[this._size - 1];
  }

  get size() {
    return this._size;
  }
}
