const solution = (arr) => {
  let answer = [];
  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    for(let j = 0; j < num; j++){
      answer.push(num);
    }
  }
  return answer;
}
