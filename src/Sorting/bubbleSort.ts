const bubbleSort = <T>(arr: T[]) => {
  let sorted = false;
  for (let i = 0; i < arr.length && !sorted; i++) {
    sorted = true;
    for (let j = 0; j < arr.length - 1 - i; j++)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
  }
  return arr;
};

const result = bubbleSort('1230'.split(''));

console.log({ result });
