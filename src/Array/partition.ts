const partition = (array: number[], start: number, end: number) => {
  let i = start;
  let j = end;
  const mid = Math.floor((start + end) / 2);

  console.log(array[mid]);

  while (i <= j) {
    while (array[i] <= array[mid] && i <= end) i++;
    while (array[j] > array[mid] && j >= start) j--;
    i < j && ([array[i], array[j]] = [array[j], array[i]]);
    // i < j && console.log('Swapped', { i, j });
    // i < j && console.log(array);
  }
  [array[j], array[mid]] = [array[mid], array[j]];
  console.log(array);
  return mid;
};

console.log(partition([10, 80, 30, 90, 40, 50, 90], 0, 6));
