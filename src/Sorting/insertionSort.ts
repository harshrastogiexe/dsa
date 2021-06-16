const insertionSort = (arr: (number | string)[]) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
};

const result = insertionSort('06042000'.split(''));

console.log({ result });
