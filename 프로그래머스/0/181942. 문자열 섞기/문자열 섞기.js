function solution(str1, str2) {
    return Array.from({ length: str1.length }, (_, i) => str1[i] + str2[i]).join('');
}