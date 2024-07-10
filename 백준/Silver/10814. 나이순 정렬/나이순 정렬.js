const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input[0]);
const members = [];

for (let i = 1; i <= n; i++) {
    const [age, name] = input[i].split(' ');
    let member = {
        age,
        name
    }
    members.push(member);
}

const sortedAge = members.sort((a, b) => a.age - b.age);

for (const {age, name} of sortedAge) {
    console.log(age, name);
}