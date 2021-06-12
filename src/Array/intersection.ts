const intersection = (arr1: number[], arr2: number[]) => {
  let i = 0,
    j = 0;
  const temp: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) i++;
    else if (arr1[i] > arr2[j]) j++;
    else {
      temp.push(arr1[i]);
      i++;
      j++;
    }
  }

  return temp;
};

console.log({ result: intersection([1, 4, 5, 7], [2, 3]) });
