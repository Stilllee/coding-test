// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let length = line.length;
		
		console.log(length);
		rl.close();
	}
	
	process.exit();
})();
