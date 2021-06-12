const isPallindrome = (str: string) => {
  const check = (start: number, end: number): boolean => {
    if (start > end) return true;
    return str[start] === str[end] ? check(start + 1, end - 1) : false;
  };

  return check(0, str.length - 1);
};

console.log(isPallindrome('rasr'));
