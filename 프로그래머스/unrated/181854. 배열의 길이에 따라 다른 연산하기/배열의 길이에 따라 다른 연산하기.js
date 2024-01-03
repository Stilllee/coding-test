const solution = (arr, n) => {
  for(let i = arr.length % 2 === 0 ? 1 : 0; i < arr.length; i+=2) {
    arr[i] = arr[i] + n;
  }
  return arr;
}