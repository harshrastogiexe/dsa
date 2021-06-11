const secondLargest = (array: number[]) => {
  let max = 0;
  let max2: number | undefined;
  let invalid = true;
  for (let i = 1; i < array.length; i++) {
    if (invalid && array[i] !== array[i - 1]) invalid = false;
    if (array[i] > array[max]) {
      max2 = max;
      max = i;
    }
  }
  if (!max2) return -1;
  return invalid ? -1 : max2;
};

console.log(secondLargest([1, 1, 1, 1]));
