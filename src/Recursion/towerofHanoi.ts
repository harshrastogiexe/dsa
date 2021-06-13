type Disk = 'A' | 'B' | 'C';
const towerOfHanoi = (count: number, from: Disk = 'A', aux: Disk = 'B', to: Disk = 'C') => {
  if (count === 1) return console.log(`Disk ${count}: ${from} to ${to}`);
  towerOfHanoi(count - 1, 'A', 'C', 'B');
  console.log(`Disk ${count}: ${from} to ${to}`);
  towerOfHanoi(count - 1, 'B', 'A', 'C');
};

towerOfHanoi(5);
