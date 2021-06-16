const selectionSort = (arr: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) small = j;
    }
    small !== i && ([arr[i], arr[small]] = [arr[small], arr[i]]);
  }
  return arr;
};

const result = selectionSort('9120757456'.split(''));

console.log({ result });
