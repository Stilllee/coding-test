function solution(arr) {
  let current = arr.slice();
  let count = 0;

  while (true) {
    let next = current.map(e => {
      if (e >= 50 && e % 2 === 0) {
        return e / 2;
      } else if (e < 50 && e % 2 === 1) {
        return e * 2 + 1;
      }
      return e;
    });

    if (arraysEqual(current, next)) {
      return count;
    }

    current = next;
    count++;
  }
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, index) => val === b[index]);
}
