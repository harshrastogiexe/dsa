function sort(array) {
  const len = array.length;

  for (let i = Math.floor(len / 2) - 2; i >= 0; i--) heapify(array, len, i);
  console.log(array);
  for (let i = len - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }
  return array;
}

function heapify(array, len, index) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let largest = index;

  if (left < len && array[left] > array[largest]) largest = left;
  if (right < len && array[right] > array[largest]) largest = right;

  if (index === largest) return;

  [array[largest], array[index]] = [array[index], array[largest]];
  heapify(array, len, largest);
}

console.log(sort([9, 1, 2, 0, 7, 7, 4]));
