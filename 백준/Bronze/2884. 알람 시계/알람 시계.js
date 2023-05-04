const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let hour = Number(arr[0]);
let minute = Number(arr[1]);
let difference = minute - 45;

if (difference < 0) {
    minute = 60 + difference;
    hour -= 1;
    if (hour === -1){
        hour = 23;
    }
} else {
    minute -= 45;
}

console.log(hour, minute)