const intersection = (nums1: number[], nums2: number[]): number[] => {
  const commons = [];
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums2[j] > nums1[i]) i++;
    else if (nums2[j] < nums1[i]) j++;
    else {
      commons.push(nums1[i]);
      i++;
      j++;
    }
  }
  return commons;
};

const findCommands = (...arr: number[][]) => {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return intersection(arr[0], arr[1]);
  let common = intersection(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    common = intersection(common, arr[i]);
  }
  return common;
};

console.log(
  findCommands([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120])
);
