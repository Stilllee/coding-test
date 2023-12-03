const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const triangleArea = (arr) => {
    const area = Number(arr[0]) * Number(arr[1]) / 2;
    return area.toFixed(1);
};

console.log(triangleArea(arr))