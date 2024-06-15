// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	let caseCount;
	for await (const line of rl) {
		if(!caseCount) {
			caseCount = parseInt(line);
			continue;
		}
		if(!line) rl.close();
		input.push(line);
	}
	solution(input);
	process.exit();
})();

function solution(input) {
	// A, B 각각의 카드 구하기
	const A = [], B = [];
	for(let i=0; i<input.length; i++) {
		if(i % 2 === 0) A.push(input[i].split(" ").slice(1).map(Number));
		else B.push(input[i].split(" ").slice(1).map(Number));
	}

	// 각 판의 승자 구하기
	// 별: 4, 동그라미:3, 네모:2, 세모:1
	const winner = [];
	const cardScore = [4,3,2,1];
	for(let i=0; i<A.length; i++) {
		for(let j=0; j<cardScore.length; j++) {
			const countA = A[i].filter((number) => number === cardScore[j]).length;
			const countB = B[i].filter((number) => number === cardScore[j]).length;
			
			if(countA === countB && j === cardScore.length -1) {
				winner.push("D")
			} else if(countA > countB) {
				winner.push("A")
				break;
			} else if(countB > countA) {
				winner.push("B")
				break;
			}
		}
	}
	
	//승자 출력하기
	for(person of winner) {
		console.log(person);
	}
	console.log();
}