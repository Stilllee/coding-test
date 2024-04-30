function solution(my_string) {    
    // 문자열 전역(g) 검색을 통해 숫자 찾기
    const numbers = my_string.match(/[0-9]/g).map(Number);
    
    numbers.sort();
    
    
    return numbers;
}