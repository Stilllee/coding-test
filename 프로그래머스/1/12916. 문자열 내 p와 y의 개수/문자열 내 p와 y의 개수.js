function solution(s){
    let lowerCaseStr = s.toLowerCase();
    
    let pCount = (lowerCaseStr.match(/p/g) || []).length;
    let yCount = (lowerCaseStr.match(/y/g) || []).length;

    return pCount === yCount;
}