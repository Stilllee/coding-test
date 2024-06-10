// Run by Node.js
const readline = require('readline');

const coins = [40, 20, 10, 5, 1];
let n;
let count = 0;

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		n = parseInt(line);
		
		for (let i = 0; i < coins.length; i++) {
			if (n >= coins[i]) {
				count += Math.floor(n / coins[i]);
				n = n % coins[i];
			}
		}
		
		console.log(count);
		
		rl.close();
	}
	
	process.exit();
})();
