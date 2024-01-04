const solution = (str, parts) => {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    result += str[i].slice(parts[i][0], parts[i][1] + 1);
  }
  return result;
}