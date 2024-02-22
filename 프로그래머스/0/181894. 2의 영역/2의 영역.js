function solution(arr) {
  let start = -1;
  let end = -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      if (start === -1) start = i;
      end = i;
    }
  }  
    
  if (start === -1) return [-1];
  
  return arr.slice(start, end + 1);
}