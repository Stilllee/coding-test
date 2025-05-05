const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
console.log(n + 2)