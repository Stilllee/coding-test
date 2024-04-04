function solution(rank, attendance) {
    let availableStudents = rank
        .map((r, i) => ({ index: i, rank: r }))
        .filter((_, i) => attendance[i]);
    
    availableStudents.sort((a, b) => a.rank - b.rank);
    
    const [a, b, c] = availableStudents.map(s => s.index);
    
    return (10000 * a) + (100 * b) + c;
}