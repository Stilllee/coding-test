// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	
	for await (const line of rl) {
		input.push(line.trim());
		if (input.length === 2) {
			break;
		}
	}
	
	const n = parseInt(input[0], 10);
	const s = input[1];
	
	let result = '';
	
	for (let i = 0; i < n; i++) {
		const char = s[i];
		if (char === char.toUpperCase()) {
			result += char.toLowerCase();
		} else {
			result += char.toUpperCase();
		}
	}
	
	console.log(result);
	
	rl.close();
	process.exit();
})();
