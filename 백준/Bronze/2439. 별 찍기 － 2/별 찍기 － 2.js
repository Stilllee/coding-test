const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const starPrinter = (n) => {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (let k = 1; k <= i; k++) {
            line += '*';
        }
        console.log(line);
    }
}

starPrinter(n);