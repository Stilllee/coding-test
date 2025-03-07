function solution(babbling) {
    // 올바른 발음만 허용하는 정규표현식
    // ^ 시작부터 $ 끝까지 오직 (aya|ye|woo|ma) 패턴만 반복 가능
    const regex = /^(aya|ye|woo|ma)+$/;
    
    // 연속된 같은 발음을 금지하는 정규표현식
    const banned = /ayaaya|yeye|woowoo|mama/;
    
    // 조건에 맞는 단어만 필터링하고 개수 반환
    return babbling.filter((word) => regex.test(word) && !banned.test(word)).length;
}