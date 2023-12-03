const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const isPayable = arr => (arr[0] * 100) >= Number(arr[1]) ? console.log('Yes') : console.log('No');

isPayable(arr);