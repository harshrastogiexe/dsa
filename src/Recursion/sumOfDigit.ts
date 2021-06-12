const sumOfDigit = (val: number): number => {
  const sum = (val: number, result = 0): number => {
    if (val <= 0) return result;
    return sum(Math.floor(val / 10), result + (val % 10));
  };
  return sum(val);
};

console.log(sumOfDigit(2));
