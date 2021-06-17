const merge = (arr: number[], config: { start?: number; mid: number; end?: number }) => {
  const { start, end, mid } = { start: 0, end: arr.length, ...config };
  const left = [],
    right = [];

  for (let i = start; i <= mid; i++) left.push(arr[i]);
  for (let i = mid; i <= mid; i++) right.push(arr[i]);

  let i = 0,
    j = 0,
    k = 0;

  while (i < left.length && j < right.length) {
    const small = left[i] <= right[j] ? left[i++] : right[j++];
    arr[k++] = small;
  }

  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = arr[j++];

  console.log(arr);
};

const sort = (arr: number[], low = 0, end = arr.length - 1) => {
  if (low >= end) return;
  const mid = low + Math.floor((end - low) / 2);
  sort(arr, low, mid);
  sort(arr, mid + 1, end);
  merge(arr, { start: low, mid, end });

  return arr;
};

console.log(sort([10, 5, 30, 15, 7]));
