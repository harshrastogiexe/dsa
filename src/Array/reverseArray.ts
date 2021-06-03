export const reverseArray = <T>(arr: T[], len?: number) => {
  if (!len) len = arr.length;
  const length = len / 2;

  for (let i = 0; i < length; i++) {
    const temp = arr[i];
    const lastIndex = len - 1 - i;
    arr[i] = arr[lastIndex];
    arr[lastIndex] = temp;
  }
  return arr;
};

const result = {
  op1: reverseArray([1, 2, 3]),
  op2: reverseArray([4, 5, 1, 2]),
};
console.time('Time');
console.log(result);
console.timeEnd('Time');
