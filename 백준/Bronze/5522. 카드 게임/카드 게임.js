const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const score = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += Number(arr[i]);
    }
    return console.log(result);
}

score(arr);
