const factorialRecursive = (num: number, result = 1): number => {
  if (num === 0 || num === 1) return result;
  return factorialRecursive(num - 1, num * result);
};

const factorialIntration = (num: number): number => {
  let fact = 1;
  while (num >= 1) {
    fact *= num--;
  }
  return fact;
};

const factorial = {
  recursive: factorialRecursive,
  itration: factorialIntration,
};

console.time('Time');
console.log({ result: factorial.recursive(7) });
console.timeEnd('Time');
