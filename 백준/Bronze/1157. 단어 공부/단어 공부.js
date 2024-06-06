const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. 전부 대문자화 하기
const upperCaseInput = input.toUpperCase();

// 2. 각 알파벳 수 카운트 하기
const alphabetCount = {};

// upperCaseInput을 순회하며 각 알파벳의 수를 카운트
for (const char of upperCaseInput) {
    if (alphabetCount[char]) {
        alphabetCount[char]++;
    } else {
        alphabetCount[char] = 1;
    }
}

// 3. 가장 많은 알파벳 찾기
let maxCount = 0;
let maxChar = '';
let isMultiple = false;

// alpahbetCount 객체를 순회하며 최대 빈도 알파벳 찾기
for (const char in alphabetCount) {
    if (alphabetCount[char] > maxCount) {
        maxCount = alphabetCount[char];
        maxChar = char;
        isMultiple = false;
    } else if (alphabetCount[char] === maxCount) {
        isMultiple = true;
    }
}

// 4. 결과 출력 (여러 개가 존재하면 ? 출력)
if (isMultiple) {
    console.log('?');
} else {
    console.log(maxChar)
}