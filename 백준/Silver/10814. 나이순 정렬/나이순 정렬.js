const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input[0]);
const members = [];

for (let i = 1; i <= n; i++) {
    const [age, name] = input[i].split(' ');
    members.push({ age: parseInt(age), name });
}

members.sort((a, b) => a.age - b.age);

for (const member of members) {
    console.log(member.age, member.name);
}