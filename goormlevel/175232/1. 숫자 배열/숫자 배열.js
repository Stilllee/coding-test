// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		// 1. 입력 처리
		const n = parseInt(line.trim(), 10);
		
		// 2. 숫자 배열 생성
		const array = [];
		
		// 3. 숫자 채우기
		let num = 1;
		for (let i = 0; i < n; i++) {
			const row = [];
			for (let j = 0; j < n; j++) {
				row.push(num++);
			}
			array.push(row);
		}
		
		// 4. 결과 출력
		for (const row of array) {
			console.log(row.join(' '));
		}
		rl.close();
	}
	
	process.exit();
})();
