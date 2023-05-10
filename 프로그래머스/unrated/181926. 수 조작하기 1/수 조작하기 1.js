function solution(n, control) {
  const controlMap = {
      w: +1,
      s: -1,
      d: +10,
      a: -10
  };
    return [...control].reduce((acc, c) => acc + (controlMap[c] || 0), n);
};

