const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const result = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
    // 현재 문자의 아스키 코드에서 'a'의 아스키 코드를 빼서 0부터 25까지의 인덱스 얻
    const index = input.charCodeAt(i) - 'a'.charCodeAt(0);
    if (result[index] === -1) {
        result[index] = i;
    }
}

console.log(result.join(' '));