const printOneToN = (limit: number, currentPtr: number) => {
  if (currentPtr > limit) return;
  console.log(currentPtr);
  printOneToN(limit, currentPtr + 1);
};

printOneToN(10, 0);
