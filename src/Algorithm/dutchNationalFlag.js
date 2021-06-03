export const dutchNationalFlag = (arr) => {
  const len = arr.length;
  let low = 0;
  let mid = low;
  let high = len - 1;

  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  while (mid <= high) {
    switch (arr[mid]) {
      case 0: {
        swap(low, mid);
        mid++;
        low++;
        break;
      }
      case 1: {
        mid++;
        break;
      }
      case 2: {
        swap(mid, high);
        high--;
      }
    }
  }
  return arr;
};

console.log(dutchNationalFlag([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
