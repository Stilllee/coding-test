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
  let values = Object.values(counts);
  
  if (values.includes(4)) {
    return 1111 * parseInt(keys[0]);
  } else if (values.includes(3)) {
    let p = parseInt(keys[values.indexOf(3)]);
    let q = parseInt(keys[values.indexOf(1)]);
    return Math.pow(10 * p + q, 2);
  } else if (values.includes(2)) {
    if (values.length === 2) {
      let p = parseInt(keys[0]);
      let q = parseInt(keys[1]);
      return (p + q) * Math.abs(p - q);
    } else {
      let p = parseInt(keys[values.indexOf(2)]);
      let otherKeys = keys.filter(key => key !== p.toString());
      let q = parseInt(otherKeys[0]);
      let r = parseInt(otherKeys[1]);
      return q * r;
    }
  } else {
    return Math.min(a, b, c, d);
  }
}