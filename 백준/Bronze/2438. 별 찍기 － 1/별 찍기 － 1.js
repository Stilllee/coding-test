const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const starPrinter = (n) => {
    for(let i = 1; i <= n; i++) {
        let stars = '';
        for(let j = 0; j < i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

starPrinter(n);