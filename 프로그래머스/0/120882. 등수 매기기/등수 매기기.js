function solution(score) {
    const averages = score.map(([eng, math]) => (eng + math) / 2);
    const sortedAverages = [...averages].sort((a, b) => b - a);

    return averages.map((avg) => sortedAverages.indexOf(avg) + 1)
}