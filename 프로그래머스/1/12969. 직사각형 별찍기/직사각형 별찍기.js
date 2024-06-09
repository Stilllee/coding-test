process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    // 입력 처리
    const n = data.split(" ");
    const a = Number(n[0])
    const b = Number(n[1]);
    
    // 직사각형 출력
    const row = '*'.repeat(a);
    
    for (let i = 1; i <= b; i++) {
        console.log(row);
    }
});