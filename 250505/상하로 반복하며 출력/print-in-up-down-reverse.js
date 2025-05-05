const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
const result = Array.from(n).fill(0).map(() => Array.from(n).fill(0));