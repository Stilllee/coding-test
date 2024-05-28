function solution(emergency) {
    let sortedEmergency = [...emergency].sort((a, b) => b - a);
    let ranks = emergency.map(num => sortedEmergency.indexOf(num) + 1);
    
    return ranks;
}