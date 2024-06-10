// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const [a, b] = line.split(' ').map(Number);
		
		const result = (a + b).toFixed(6);
		
		console.log(result)
		
		rl.close();
	}
	
	process.exit();
})();
