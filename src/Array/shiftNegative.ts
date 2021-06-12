const shiftNegative = (array: number[]) => {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      i !== j && ([array[i], array[j]] = [array[j], array[i]]);
      j++;
    }
  }
  return array;
};

console.time('Time');
console.log({ result: shiftNegative([-2, -3, 1, 2, -5]) });
console.timeEnd('Time');
