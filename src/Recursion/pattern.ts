const foo = (num: number) => {
  if (num <= 0) return;
  console.log(num);
  foo(num - 1);
  console.log(num);
};

const bar = (num: number): number => {
  if (num <= 1) return 0;
  return 1 + bar(num / 2);
};

const bizz = (num: number) => {
  if (num <= 0) return;
  bizz(Math.floor(num / 2));
  console.log(num % 2);
};

// const toBinary = (val: number): number | string => {
//   if (val <= 0) return '';
//   return toBinary(Math.floor(val / 2)) + (val % 2).toString();
// };

const toBinary = (val: number, last: string = ''): number | string => {
  if (val <= 0) return last;
  return toBinary(Math.floor(val / 2), `${val % 2}` + last);
};
console.time('Time');
console.log(toBinary(100000089998888999043802480928394828999900000000009990222222222222));
console.timeEnd('Time');
