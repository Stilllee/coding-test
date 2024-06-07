function solution(s) {
    // 1. 빈 객체 생성
    let obj = {};
    
    // 2. 문자열 순회하면서 객체에 문자: 카운트 증가시키기
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    
    // 3. 객체에서 카운트가 1인 문자를 배열에 저장
    let result = [];
    
    for (let char in obj) {
        if (obj[char] === 1) {
            result.push(char);
        }
    }
    
    // 4. 배열을 사전순으로 정렬
    result.sort();
    
    // 5. 배열을 문자열로 변환하여 변환, 카운트가 1인 문자가 없다면 빈 문자열 반환
    return result.join('');
}