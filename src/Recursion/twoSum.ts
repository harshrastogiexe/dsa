function twoSum(nums: number[], target: number): number[] {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const searchFor = target - nums[i];
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      if (nums[j] === searchFor) return [i, j];
    }
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));
