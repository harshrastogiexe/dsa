const shiftZeros = (array: number[], pos: 'start' | 'end' = 'end') => {
  let ptr = pos === 'end' ? array.length - 1 : 0;
  let start = pos === 'start' ? 0 : array.length - 1;
  switch (pos) {
    case 'start': {
      for (let i = start; i < array.length; i++)
        if (array[i] !== 0) {
          [array[ptr], array[i]] = [array[i], array[ptr]];
          ptr++;
        }
      return array;
    }
    case 'end': {
      for (let i = array.length - 1; i > -1; i--)
        if (array[i] !== 0) {
          [array[ptr], array[i]] = [array[i], array[ptr]];
          ptr--;
        }
      return array;
    }
  }
};

console.log(shiftZeros([10, 8, 0, 0, 0, 12, 0], 'start'));
