const mid = (...val) => Math.floor(val.reduce((sum = 0, curr) => sum + curr) / val.length);

const interative = (array, key, start = 0, end = array.length - 1) => {
  if (!key) throw new Error('Key Not Provided');

  while (start <= end) {
    const middle = mid(start, end);
    const middleValue = array[middle];

    if (middleValue === key) return middle;
    else if (key < middleValue) end = middle - 1;
    else start = middle + 1;
  }

  return -1;
};

const recursive = (array, key, start = 0, end = array.length - 1) => {
  if (!key) throw new Error('Key Not Provided');
  if (start > end) return -1;

  const middle = mid(start, end);
  const middleValue = array[middle];

  if (middleValue === key) return middle;
  else if (key < middleValue) return recursive(array, key, start, middle - 1);
  else return recursive(array, key, middle + 1, end);
};

export const search = { recursive, interative };
