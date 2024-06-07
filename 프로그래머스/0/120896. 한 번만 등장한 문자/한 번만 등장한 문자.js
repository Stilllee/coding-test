function solution(s) {
    // 1. 문자 빈도 카운트
    const charCount = {};
    
    for (const char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    // 2. 한 번만 등장하는 문자 필터링
    const uniqueChars = [];
    
    for (const char in charCount) {
        if (charCount[char] === 1) {
            uniqueChars.push(char);
        }
    }
    
    // 3. 사전 순 정렬
    uniqueChars.sort();
    
    // 4. 문자열 반환
    return uniqueChars.join('');
}