const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);

function howMany(sugar){
    let count = 0;

    while (sugar >= 0) {
        if (sugar % 5 === 0) {
            return count + (sugar / 5);
        }
        sugar -= 3;
        count++;
    }

    return -1;
}

console.log(howMany(n));