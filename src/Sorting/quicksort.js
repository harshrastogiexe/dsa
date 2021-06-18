const insertionSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return arr;
  for (let i = start + 1; i < end + 1; i++) {
    const key = arr[i];
    let j = i - 1;
    while (arr[j] > key && j >= start) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
};

function QuickSort(arr, left = 0, right = arr.length - 1, intersion = true) {
  if (left >= right) return;
  if (intersion) if (right - left > 5) return insertionSort(arr, left, right);

  const index = partition(arr, left, right);
  if (left < index - 1) QuickSort(arr, left, index - 1);
  if (index < right) QuickSort(arr, index, right);

  return arr;
}

function partition(arr, left, right) {
  const index = Math.floor(left + Math.random() * (right - left + 1));
  let pivot = arr[index],
    i = left,
    j = right;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return i;
}

(() => {
  const arr1 = [
    5, 3, 4, 2, 4, 2, 4, 4, 6, 7, 7, 4, 3, 5, 7, 1, 2, 2, 3, 2, 2, 32, 3, 2, 1, 31, 3, 1, 12, 3, 3,
    4, 4, 2, 3, 2, 1, 2, 3, 2, 3, 3, 4, 3, 3, 4, 2, 2, 1, 1, 3, 22, 3, 1, 1, 31, 2, 3, 2, 1, 3, 2,
    1, 3, 3, 4, 5, 3, 22, 4, 2, 3, 3, 3, 3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3, 3,
  ];
  const arr2 = [5, 4, 3, 2, 1];
  console.time('Vina');
  const result = QuickSort(arr1);
  console.timeEnd('Vina');
  console.log(result);
})();
