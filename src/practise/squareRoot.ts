const sqaureRoot = (val: number) => {
  let low = 1,
    high = val,
    result = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (mid * mid === val) return mid;
    else if (val < mid * mid) high = mid - 1;
    else {
      low = mid + 1;
      result = low;
    }
  }
  return result;
};

console.log(sqaureRoot(13));
