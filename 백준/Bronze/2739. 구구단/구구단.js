const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const mult = (n) => {
    for(let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

mult(n);
