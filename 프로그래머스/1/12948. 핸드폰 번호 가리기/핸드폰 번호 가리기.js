function solution(phone_number) {
    const len = phone_number.length;
    const hiddenPart = '*'.repeat(len - 4);
    const visiblePart = phone_number.slice(len - 4);
    
    return hiddenPart + visiblePart;
}