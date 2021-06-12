const asciiTriangle = (num: number) => {
  const start = 65;
  for (let i = 0; i < num; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
      str += String.fromCharCode(start + num - 1 - j);
    }
    console.log(str);
  }
};
asciiTriangle(26);
