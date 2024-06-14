const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const t = parseInt(input[0]);
let result = '';

for (let i = 1; i <= t; i++) {
    const [r, s] = input[i].split(' ');
    const repeatCount = parseInt(r);
    let p = '';

    for (let j = 0; j < s.length; j++) {
        p += s[j].repeat(repeatCount);
    }

    result += p + '\n';
}

console.log(result);