function solution(skill, skill_trees) {
    let validCount = 0;
    
    skill_trees.forEach(skillTree => {
        // skill에 포함된 스킬들만 필터링하여 순서 유지
        let filtered = skillTree.split('').filter(s => skill.includes(s)).join('');
        
        // 필터링된 스킬트리가 skill의 앞부분과 일치하는지 확인
        if (skill.startsWith(filtered)) {
            validCount++;
        }
    })
    
    return validCount;
}