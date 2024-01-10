const solution = n => {
  const count = Math.floor(n / 2);
  return count * (2 + (count * 2)) / 2;
};