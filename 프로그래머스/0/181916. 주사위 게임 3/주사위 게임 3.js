function countDice(a, b, c, d) {
  let counts = {};
  [a, b, c, d].forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });
  return counts;
}

function solution(a, b, c, d) {
  let counts = countDice(a, b, c, d);
  let keys = Object.keys(counts);
  
  switch (keys.length) {
    case 1:
      // 모든 주사위가 같은 숫자
      return 1111 * keys[0];
    
    case 2:
      // 두 쌍의 주사위가 같은 숫자 또는 세 개가 같은 숫자
      let [first, second] = keys.map(Number);
      if (counts[first] === 2 && counts[second] === 2) {
    // 두 쌍의 주사위가 각각 같은 숫자
    return (first + second) * Math.abs(first - second);
  } else {
    // 세 개가 같은 숫자
    let p = counts[first] === 3 ? first : second;
    let q = counts[first] === 1 ? first : second;
    return Math.pow(10 * p + q, 2);
  }
    
    case 3:
      // 한 쌍의 주사위가 같은 숫자
      let doubleNum = keys.find(key => counts[key] === 2);
      let product = keys.reduce((prod, key) => prod * (key !== doubleNum ? Number(key) : 1), 1);
      return product;
      
    default:
      // 모든 숫자가 다름
      return Math.min(a, b, c, d);
  }
}