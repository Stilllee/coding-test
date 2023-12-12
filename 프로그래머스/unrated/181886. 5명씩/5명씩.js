function solution(names) {
    const arr = [];
    for(let i = 0; i < names.length; i+=5) {
    arr.push(names[i]);
  }
    return arr;
}