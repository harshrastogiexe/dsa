export const rangeAndCoeff = (arr = []) => {
  let min = arr[0];
  let max = arr[0];

  arr.forEach((val) => {
    if (val < min) min = val;
    if (val > max) max = val;
  });
  console.log({ max, min });
  return {
    range: max - min,
    Coefficient: (max - min) / (max + min),
  };
};

console.log(rangeAndCoeff([15, 16, 10, 9, 6, 7, 17]));
