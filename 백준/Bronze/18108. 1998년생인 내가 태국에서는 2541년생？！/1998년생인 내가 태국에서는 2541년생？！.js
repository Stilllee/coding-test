const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const yearConverter = year => console.log(year - 543);

yearConverter(input);