const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const asciiCode = input.charCodeAt(0);

console.log(asciiCode);