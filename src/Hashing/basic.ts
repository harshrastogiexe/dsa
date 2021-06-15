type HashFunction<key> = (...data: any) => key;
class Hashtable<K, V> {
  hashFunction: HashFunction<K>;
  private table = new Map<K, V[]>();

  constructor(func?: HashFunction<K>) {
    this.hashFunction = func ? func : func;
  }

  contains(data: V) {
    const key = this.hashFunction(data);
    const value = this.table.get(key);
    if (!value) return false;

    return value.includes(data);
  }

  save(data: V) {
    const key = this.hashFunction(data);
    const value = this.table.get(key);

    if (!value) this.table.set(key, [data]);
    else value.push(data);

    return key;
  }

  remove(data: V) {
    const key = this.hashFunction(data);
    const value = this.table.get(key);

    if (!value) return false;
    const pos = value.indexOf(data);
    const result = !!(pos !== -1 && value.splice(pos, 1));
    return result;
  }
}

const hashCollection = new Hashtable<number, number>();
hashCollection.save(91);
hashCollection.save(20);
hashCollection.save(75);
hashCollection.save(74);
hashCollection.save(56);
console.log(hashCollection);
