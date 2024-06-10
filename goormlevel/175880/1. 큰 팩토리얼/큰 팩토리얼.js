// Run by Node.js
const readline = require('readline');

const MOD = 1000000007;

function factorial(n) {
	if (n === 0 || n === 1) return 1;
	
	let result = 1;
	
	for (let i = 2; i <= n; i++) {
		result = (result * i) % MOD;
	}
	
	return result;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const n = parseInt(line);
		const fact = factorial(n);
		
		console.log(fact);
		
		rl.close();
	}
	
	process.exit();
})();
