const hash = () => {
  const table = new Map<number, number>();
  table.set(20, 100);
  table.set(10, 100);
  console.log(table.get(30));
  console.log(table.entries());
};

hash();
