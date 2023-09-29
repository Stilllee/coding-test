function solution(n, arr = []){
  arr.push(n); // 현재 숫자 n을 배열에 넣는다.
  if (n === 1) return arr; // n이 1이면, 더 이상 변환할 필요가 없으니 배열을 반환한다.
  if (n % 2 === 0) return solution(n / 2, arr); // n이 짝수면, 2로 나눈 값으로 함수를 다시 호출 (재귀 호출)
  return solution(3 * n + 1, arr); // n이 홀수면, 3을 곱하고 1을 더한 값으로 함수를 다시 호출
}