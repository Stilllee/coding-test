const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

for (const str of input) {
    console.log(str);
}