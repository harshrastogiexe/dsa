import { dutchNationalFlag } from '../Algorithm/dutchNationalFlag.js';

export const sort = ({ arr }: { arr: number[] }) => {
  const counter: any = {};
  dutchNationalFlag;
  arr.forEach((val) => {
    if (counter[val] === undefined) {
      counter[val] = 1;
      return;
    }
    counter[val]++;
  });
  let start = 0;

  return arr.map(() => {
    if (counter[start] === 0) start++;
    counter[start]--;
    return start;
  });
};

const result = {
  op1: sort({ arr: [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1] }),
  // op2: dutchNationalFlag([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]),
};
console.time('Time');
console.log(result);
console.timeEnd('Time');
