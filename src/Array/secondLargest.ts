const secondLargest = (array: number[]) => {
  let result = -1;
  let largest = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[largest]) {
      result = largest;
      largest = i;
      continue;
    } else if (array[i] !== array[largest]) {
      if (result === -1 || array[i] > array[result]) result = i;
    }
  }
  return result;
};

console.log(secondLargest([1, 1]));
