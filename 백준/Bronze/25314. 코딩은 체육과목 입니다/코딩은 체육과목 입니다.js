const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = '';
let count = 0;

function checker(byte) {
    count = byte / 4;
    
    for (let i = 1; i <= count; i++) {
        result += 'long ';
    }

    result += 'int';

    return result;
}

console.log(checker(input));