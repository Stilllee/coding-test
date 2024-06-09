process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let result = '';
    let line = '';
    
    for (let i = 1; i <= a; i++) {
        if (i === a) {
            line += '*\n'
        } else {
            line += '*';   
        }
    }
    
    for (let j = 1; j <= b; j++) {
        result += line;
    }
    
    return console.log(result);
});