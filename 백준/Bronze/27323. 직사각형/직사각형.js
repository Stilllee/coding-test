const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const rectangleArea = (arr) => console.log(parseInt(arr[0]) * parseInt(arr[1]));

rectangleArea(arr);