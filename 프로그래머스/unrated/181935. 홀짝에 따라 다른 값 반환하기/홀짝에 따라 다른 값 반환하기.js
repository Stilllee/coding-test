function solution(n) {
  let answer = 0;

  if (n % 2 !== 0) {
    let odd = 0;
    for (let i = 0; i <= n; i++) {
      if (i % 2 !== 0) {
        odd += i;
        answer = odd;
      }
    }    
  } else {
    let even = 0;
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
          even += (i ** 2);
          answer = even;
      }
    }
  }
  return answer;
}