// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;

while (true) {
    const [w, h, str] = input[idx].split(' ');
    idx++;

    console.log(w * h);
    
    if (str === 'C') {
        break;
    }
}
