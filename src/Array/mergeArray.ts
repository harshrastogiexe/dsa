const mergeArray = (arr: number[], mid: number, low = 0, end = arr.length) => {
  const result: number[] = [];

  const len1 = mid - low + 1;
  const len2 = end - mid;

  let i = low,
    j = mid + 1;

  while (i < len1 && j - mid < len2) {
    if (arr[i] <= arr[j]) result.push(arr[i++]);
    else result.push(arr[j++]);
  }

  while (i < len1) result.push(arr[i++]);
  while (j < len2) result.push(arr[j++]);

  result.forEach((val, i) => (arr[i] = val));

  return arr;
};

console.log(mergeArray([10, 15, 20, 40, 8, 11, 55], 3));
