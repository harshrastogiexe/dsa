const union = (arr1: number[], arr2: number[]) => {
  const temp = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) temp.push(arr1[i++]);
    else if (arr1[i] > arr2[j]) temp.push(arr2[j++]);
    else {
      temp.push(arr1[i++]);
      j++;
    }
  }
  const { start, arr } = i === arr1.length ? { start: j, arr: arr2 } : { start: i, arr: arr1 };

  for (let k = start; k < arr.length; k++) {
    temp.push(arr[k]);
  }

  return temp;
};

console.log({ result: union([2, 5, 6], [4, 6, 8, 10]) });
