const lametoPartition = (array: number[], start: number, end: number) => {
  const pivot = array[end];
  let i = start - 1;
  for (let j = start; j < end - 1; j++)
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  [array[i + 1], array[end]] = [array[end], array[i + 1]];
  return [array, i + 1];
};

console.log(lametoPartition([10, 80, 30, 90, 40, 50, 90], 0, 6));
