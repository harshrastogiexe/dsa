function search<T>(array: T[], value: T, low: number, high: number): number {
  if (high < low) return -1;

  const mid = Math.floor((low + high) / 2);
  const midValue = array[mid];

  if (midValue === value) return mid;
  else if (value < midValue) return search(array, value, low, mid - 1);
  else return search(array, value, mid + 1, high);
}

function searchItration<T>(array: T[], value: T, low: number, high: number) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = array[mid];

    if (midValue === value) return mid;
    else if (value < midValue) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}

function remove<T>(array: T[], value: T) {
  const position = search(array, value, 0, array.length - 1);
  if (position < 0) return array;
  for (let i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
  return array;
}
console.time('Time');
remove([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8], 5);
console.timeEnd('Time');
