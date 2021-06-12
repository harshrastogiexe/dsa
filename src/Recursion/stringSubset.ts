const remove = (str: string, position: number) => {
  return str.slice(0, position) + str.slice(position + 1);
};
const subsets: string[] = [];
const stringSubset = (str: string, currentStr = '', index = 0): void => {
  if (index === str.length) {
    subsets.push(currentStr);
    return;
  }
  stringSubset(str, currentStr, index + 1);
  stringSubset(str, currentStr + str[index], index + 1);
};

stringSubset('abcdefstuvwxyz');
console.time('Time');
console.log(subsets);
console.timeEnd('Time');
