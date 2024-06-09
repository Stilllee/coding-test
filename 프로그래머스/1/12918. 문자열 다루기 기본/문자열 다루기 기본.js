function solution(s) {
	const leng = s.length;

	if (leng !== 4 && leng !== 6) return false;
	
	for (let i = 0; i < leng; i++) {
		if (!('0' <= s[i] && s[i] <= '9')) return false;
	}
	
	return true;
}