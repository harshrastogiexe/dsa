const bubbleSort = <T>(arr: T[]) => {
  let sorted = false;
  for (let i = 0; i < arr.length - 1 && !sorted; i++) {
    sorted = true;
    for (let j = 0; j < arr.length - 1 - i; j++)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
  }
  return arr;
};

const result = bubbleSort('9203840923840923804820312'.split(''));

console.log({ result });
