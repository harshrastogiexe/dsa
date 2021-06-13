const rotateArray = (nums: number[]) => {
  const len = nums.length;
  const temp = nums[len - 1];
  for (let i = len; i > 0; i--) nums[i] = nums[i - 1];
  nums[0] = temp;
  return nums;
};

console.log(rotateArray([1, 2, 3, 4, 5]));
