const solution = (str, pat) => {
  const swappedStr = str.replace(/[AB]/g, match => match === 'A' ? 'B' : 'A');
  return Number(swappedStr.includes(pat));
}