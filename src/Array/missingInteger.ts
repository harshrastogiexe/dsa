const findMissing = (nums: number[]) => {
  const len = nums.length + 1;
  const sum = (len / 2) * (len + 1);
  const arraySum = nums.reduce((sum = 0, val) => val + sum);
  return sum - arraySum;
};

console.log(findMissing([1, 2, 3, 5]));
