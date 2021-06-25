const genereateCount = (array, exp) => {
  const count = Array(10).fill(0);
  array.forEach((val) => count[Math.floor(val / exp) % 10]++);
  return count;
};

const generateCumCount = (array) => {
  const cumCount = [array[0]];
  for (let i = 1; i < array.length; i++) cumCount[i] = cumCount[i - 1] + array[i];
  return cumCount;
};

function countingSort(array, len, power) {
  const count = generateCumCount(genereateCount(array, power));
  const output = [];
  for (let i = len - 1; i >= 0; i--) {
    const pos = Math.floor(array[i] / power) % 10;
    output[count[pos] - 1] = array[i];
    count[pos]--;
  }
}

function sort(array, len = array.length) {
  const max = Math.max(...array);
  for (let power = 1; max / power > 0; power = power * 10) {
    countingSort(array, len, power);
  }
  console.log(array);
  return array;
}
sort([100, 201, 101, 21, 123, 121, 3, 1, 33, 99], 7, 1);
