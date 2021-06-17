// const hoorePivot = (array, left, right) => {
//   const mid = Math.floor((left + right) / 2);

//   while (left < right) {
//     while (array[left] < array[mid]) left++;
//     while (array[right] > array[mid]) right--;

//     if (left <= right) {
//       [array[left], array[right]] = [array[right], array[left]];
//       left++;
//       right--;
//     }
//   }
//   return left;
// };

// const quicksort = (array, left = 0, right = array.length - 1) => {
//   const pivot = hoorePivot(array, left, right);

//   if (left < pivot - 1) quicksort(array, left, pivot - 1);
//   if (right < pivot) quicksort(array, pivot, right);

//   return array;
// };
function QuickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length,
    index;

  if (len > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      QuickSort(arr, left, index - 1);
    }

    if (index < right) {
      QuickSort(arr, index, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2),
    pivot = arr[middle],
    i = left, // Start pointer at the first item in the array
    j = right; // Start pointer at the last item in the array

  while (i <= j) {
    // Move left pointer to the right until the value at the
    // left is greater than the pivot value
    while (arr[i] < pivot) {
      i++;
    }

    // Move right pointer to the left until the value at the
    // right is less than the pivot value
    while (arr[j] > pivot) {
      j--;
    }

    // If the left pointer is less than or equal to the
    // right pointer, then swap values
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring swap
      i++;
      j--;
    }
  }

  return i;
}
(() => {
  const arr1 = [
    5, 3, 4, 2, 4, 2, 4, 4, 6, 7, 7, 4, 3, 5, 7, 1, 2, 2, 3, 2, 2, 32, 3, 2, 1, 31, 3, 1, 12, 3, 3,
    4, 4, 2, 3, 2, 1, 2, 3, 2, 3,
  ];
  console.time('Vina');
  const result = QuickSort(arr1);
  console.timeEnd('Vina');
  console.log(result);
})();
