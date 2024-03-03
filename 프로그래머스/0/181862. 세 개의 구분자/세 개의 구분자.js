function solution(myStr) {
    const result = myStr.split(/[abc]/).filter(Boolean);
    
    return result.length > 0 ? result : ["EMPTY"];
}