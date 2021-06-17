const hoorePartition = (array: number[], start: number, end: number) => {
  const pivot = array[start];
  let i = start;
  let j = end;
  const swap = (i: number, j: number) => i !== j && ([array[i], array[j]] = [array[j], array[i]]);
  while (true) {
    while (array[i] < pivot && i <= end) i++;
    while (array[j] > pivot && j >= start) j--;
    if (i >= j) return { j, array };
    swap(i++, j++);
  }
};

console.log(hoorePartition([5, 5, 5, 5], 0, 3));
