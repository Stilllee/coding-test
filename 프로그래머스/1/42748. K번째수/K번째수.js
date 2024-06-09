function solution(array, commands) {
    // 1. 빈 배열 생성
    const answer = [];
    
    // 2. commands를 순회해서 i, j, k를 가져온다.
    for (const [i, j, k] of commands) {
        // 3. array를 i번째부터 j번째까지 자른 후 정렬한다.
        const slicedArr = array.slice(i - 1, j).sort((a, b) => a - b);
        
        // 4. k번째에 있는 수를 answer 배열에 저장한다.
        answer.push(slicedArr[k - 1]);
    }
    
    return answer;
}