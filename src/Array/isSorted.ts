function isSorted(array: number[]) {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) if (array[i] > array[i + 1]) return false;
  return true;
}

console.log(isSorted([2, 1]));
