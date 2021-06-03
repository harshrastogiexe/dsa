// array , size,key, segmet size
interface Inputs {
  arr: number[];
  len?: number;
  key: number;
  segmentSize: number;
}
const checkKeyInSegment = ({ arr, key: x, len: n, segmentSize: k }: Inputs): boolean => {
  if (!n) n = arr.length;

  const segment = {
    start: 0,
    end: k,
    increase: function () {
      if (this.start > n!) return console.warn('Cannt Set Start Greater Than');
      this.start += k;
      this.end = (n! - this.start) / k >= 0 ? this.end + k : n!;
    },
  };

  const counter = {
    value: 0,
    reset() {
      this.value = 0;
    },
  };

  for (let i = 0; i < n; i++) {
    if (counter.value === k) return false;
    const element = arr[i];
    if (element === x) {
      segment.increase();
      counter.reset();
      i = segment.start;
    } else counter.value++;
  }
  return true;
};

const result = {
  op1: checkKeyInSegment({
    arr: [21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25],
    key: 25,
    segmentSize: 5,
  }),

  op2: checkKeyInSegment({
    arr: [3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3],
    key: 3,
    segmentSize: 3,
  }),

  op3: checkKeyInSegment({
    arr: [5, 2, 3, 4, 9, 3, 1, 7, 3, 11, 12, 3],
    key: 3,
    segmentSize: 3,
  }),
};

console.time('Time');
console.log(result);
console.timeEnd('Time');
