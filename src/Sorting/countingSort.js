const genereateCount = (array, range) => {
  const count = Array(range).fill(0);
  array.forEach((val) => count[val]++);
  return count;
};

const generateCumCount = (array) => {
  const cumCount = [array[0]];
  for (let i = 1; i < array.length; i++) cumCount[i] = cumCount[i - 1] + array[i];
  return cumCount;
};

function sort(array, range = Math.max(...array) + 1) {
  const cumCount = generateCumCount(genereateCount(array, range));

  const output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const pos = array[i];
    output[cumCount[pos] - 1] = array[i];
    cumCount[pos]--;
  }
  output.forEach((val, i) => (array[i] = val));
  console.log(array);
  return array;
}

sort([5, 6, 5, 2]);
