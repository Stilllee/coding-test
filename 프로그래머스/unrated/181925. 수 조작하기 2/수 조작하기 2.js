function solution(numLog) {
  let answer = '';
  let num = numLog[0];

  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];

    if (diff === 1) {
      answer += 'w';
    } else if (diff === -1) {
      answer += 's';
    } else if (diff === 10) {
      answer += 'd';
    } else if (diff === -10) {
      answer += 'a';
    }

    num = numLog[i];
  }

  return answer;
}