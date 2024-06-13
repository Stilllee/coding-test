// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
	input.push(line);
	if (input.length - 1 == parseInt(input[0])) {
		rl.close();
	}
}).on("close", function() {
	const T = parseInt(input[0]);
	let result = [];
	
	for (let i = 1; i <= T; i++) {
		const [X, Y, N] = input[i].split(' ').map(Number);
		
		const distance = Math.abs(X) + Math.abs(Y);
		if (N >= distance && (N - distance) % 2 === 0) {
			result.push('YES');
		} else {
			result.push('NO');
		}
	}
	
	console.log(result.join('\n'));
	
	process.exit();
});