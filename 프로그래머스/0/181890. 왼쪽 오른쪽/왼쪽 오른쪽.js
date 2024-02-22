function solution(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'l') return list.slice(0, i);
        if (list[i] === 'r') return list.slice(i + 1);
    }
    return [];
}