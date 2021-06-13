class Item {
  public data: number;
  next: null | Item = null;
  constructor(val: number) {
    this.data = val;
  }
}

class List {
  public head: null | Item = null;
  constructor() {
    this.head;
  }
  insert(data: number) {
    const item = new Item(data);
    if (!this.head) return (this.head = item);

    let temp: Item | null = this.head;
    while (temp.next !== null) temp = temp.next;
    temp.next = item;
  }
}

const hashFunction = (val: number) => val % 7;
type HashFunction = (val: any) => number;
class HashTable {
  private map = new Map<number, List>();
  hashFuction: HashFunction;
  constructor(func: HashFunction) {
    this.hashFuction = func;
  }
  save(value: number) {
    const key = this.hashFuction(value);

    if (!this.map.has(key)) {
      const list = new List();
      list.insert(value);
      this.map.set(key, list);
      return key;
    }
    this.map.get(key)?.insert(value);
    return key;
  }

  get(key: number) {
    const list = this.map.get(key);
    return list;
  }
}

const table = new HashTable((val) => val % 7);
table.save(50);
table.save(21);
table.save(58);
table.save(17);
table.save(15);
table.save(49);
table.save(56);
table.save(22);
table.save(23);
table.save(25);

console.log(table.get(0));
console.log(table.get(1));
console.log(table.get(2));
console.log(table.get(3));
console.log(table.get(4));
