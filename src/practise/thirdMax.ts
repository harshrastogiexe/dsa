function thirdMax(nums: number[]): number {
  if (nums.length < 3) return Math.min(...nums);

  const heapify = (position: number, len = nums.length) => {
    const left = 2 * position + 1;
    const right = 2 * position + 2;

    let largest = position;

    if (left < len && nums[left] > nums[largest]) largest = left;
    if (right < len && nums[right] > nums[largest]) largest = right;

    if (largest !== position) {
      [nums[largest], nums[position]] = [nums[position], nums[largest]];
      heapify(largest, len);
    }
  };

  for (let i = Math.floor(nums.length / 2) - 2; i >= 0; i--) {
    heapify(i);
  }

  console.log(nums);
  return nums[0];
}

thirdMax([9, 1, 2, 0, 7, 7, 4]);
