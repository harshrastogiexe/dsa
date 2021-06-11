const rotate = (array: number[], size: number = 2) => {
  const temp = [];
  for (let i = 0; i < size; i++) {
    temp[i] = array[i];
  }
  let i = 0;
  for (; i < array.length - size; i++) {
    array[i] = array[i + size];
  }
  for (let j = 0; j + i < array.length; j++) {
    array[j + i] = temp[j];
  }
  return array;
};

console.log(rotate([1, 2, 3, 4, 5, 1, 2], 1));
