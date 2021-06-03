export const sort = (arr: number[], len?: number) => {
  if (len === undefined) len = arr.length;

  const pivot = (start: number, end: number) => {
    let i = start;
    let j = end - 1;
    const midPos = Math.floor((i + j) / 2);
    const swap = (i: number, j: number) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
    while (i <= j) {
      const middle = arr[midPos];
      while (arr[i] < middle) {
        i++;
      }
      while (arr[j] >= middle) {
        j--;
      }
      if (i <= j) {
        swap(i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  const quickSort = (start: number = 0, end: number = len!): number[] => {
    if (len === 1) return arr;
    if (start > end) return arr;

    const mid = pivot(start, end);
    quickSort(start, mid);
    quickSort(mid + 1, end);
    return arr;
  };
  quickSort();
  return arr;
};

const result = {
  op1: sort([9, 1]),
};
console.time('Time');
console.log(result);
console.timeEnd('Time');
