const countDistinct = (num: number[]) => new Set<number>(num).size;
const countFrequency = (nums: number[]) => {
  const map = new Map();
  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    const prev = map.get(num);
    map.set(num, prev + 1);
  });

  const count: { key: number; value: number }[] = [];
  for (const [key, value] of map) {
    count.push({ key, value });
  }

  return count;
};

console.log(countDistinct([]));
console.log(countFrequency([10, 10, 20]));
