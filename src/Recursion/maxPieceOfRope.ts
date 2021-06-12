const maxPieceOfRope = (lenTotal: number, lenA: number, lenB: number, lenC: number): number => {
  if (lenTotal == 0) return 0;
  if (lenTotal < 0) return -1;
  const result = Math.max(
    maxPieceOfRope(lenTotal - lenA, lenA, lenB, lenC),
    maxPieceOfRope(lenTotal - lenB, lenA, lenB, lenC),
    maxPieceOfRope(lenTotal - lenC, lenA, lenB, lenC)
  );
  if (result < 0) return -1;
  return 1 + result;
};
console.time('Time');
console.log(maxPieceOfRope(20, 1, 2, 3));
console.timeEnd('Time');
