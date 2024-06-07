function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw;
    
    for (const [dbId, dbPw] of db) {
        if (dbId === inputId) {
            if (dbPw === inputPw) {
                return 'login';
            } else {
                return 'wrong pw';
            }
        }
    }
    
    return 'fail';
}