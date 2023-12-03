const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const colors = (n) => {
    if(n >= 620) return 'Red';
    if(n >= 590) return 'Orange';
    if(n >= 570) return 'Yellow';
    if(n >= 495) return 'Green';
    if(n >= 450) return 'Blue';
    if(n >= 425) return 'Indigo';
    return 'Violet'
}

console.log(colors(n));