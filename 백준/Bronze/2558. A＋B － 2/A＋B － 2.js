const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const a = parseInt(arr[0]);
const b = parseInt(arr[1]);

const sum = (a, b) => console.log(a + b);

sum(a, b);