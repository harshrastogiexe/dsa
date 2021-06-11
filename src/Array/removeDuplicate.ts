const removeDup = (array: number[]) => {
  let j = 0;
  for (let i = 1; i < array.length; i++) if (array[j] !== array[i]) array[++j] = array[i];
  array.length = j + 1;
  return array;
};

const result = removeDup([10, 20, 30, 30, 30, 40, 50]);
console.log(result);
