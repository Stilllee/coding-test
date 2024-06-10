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
	
	const [n, k] = input[0].split(' ');
	const numbers = input[1].split(' ');
	
	const result = numbers.filter(num => !num.includes(k));
	
	console.log(result.length);
	
	rl.close();
	process.exit();
})();
