function solution(n, control) {
    let answer = n;
    const arr = [...control]
    arr.forEach((c)=>{
        if (c === "w"){
            answer += 1;
        } else if ( c === "s"){
            answer -= 1;
        } else if (c === "d"){
            answer += 10;
        } else if (c === "a") {
            answer -= 10;
        }
    })
    return answer;
}