const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const t = parseInt(input[0]);
const strArr = [];
let result = '';

for (let i = 1; i < input.length; i++) {
    strArr.push(input[i]);
}

function print(str){
    const leng = str.length;
    if (leng < 0) return;

    if (leng === 1) {
        result = str + str;
    } else if (leng === 2) {
        result = str;
    } else {
        result = str[0] + str[leng - 1];
    }
    return result;
}

for (const str of strArr) {
    console.log(print(str));
}