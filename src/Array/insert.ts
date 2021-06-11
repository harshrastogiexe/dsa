function insertAt<T>(array: T[], value: T, position: number) {
  if (position < 0) throw new Error('Positive Index Only');
  const totalLength = array.length;
  let i = totalLength;
  while (i > position) {
    array[i] = array[--i];
  }
  array[position] = value;
  return array;
}

function insert<T>(array: T[], value: T, position?: number) {
  if (position) {
    return insertAt(array, value, position);
  }
  array.push(value);
  return array;
}

console.log({ result: insert([1, 2, 3, 4], 3) });
