const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
const gradeCard = input[1].split(' ').map(Number);

const m = Math.max(...gradeCard);

let result = 0;

for (const grade of gradeCard) {
    const newGrade = grade / m * 100;
    result += newGrade;
}

const average = result / n;

console.log(average % 1 === 0 ? average.toFixed(1) : average);