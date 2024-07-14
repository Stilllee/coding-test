function solution(array) {
    // 1. 빈 배열 생성
    // 2. 빈 배열의 인덱스에 인덱스에 해당하는 수의 회수만큼 카운트
    // 3. Math.max로 값이 가장 큰 값 찾아 인덱스 리턴하기
    // 4. 값이 여러개라면 -1 리턴
    const leng = array.length;
    if (leng === 1) return array[0];
    
    const count = Array(Math.max(...array) + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
        const idx = array[i];
        count[idx]++;
    }
    
    const maxCount = Math.max(...count);
    let maxIndex = -1;
    let duplicate = false;
    
    for (let i = 0; i < count.length; i++) {
        if (count[i] === maxCount) {
            if (maxIndex === -1) {
                maxIndex = i;
            } else {
                duplicate = true;
                break;
            }
        }
    }
    
    if (duplicate) {
        return -1;
    } else {
        return maxIndex;
    }
    
}
