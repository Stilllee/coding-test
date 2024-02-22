function solution(list){
  const includeL = list.indexOf('l');
  const includeR = list.indexOf('r');

  if (includeL !== -1 && (includeR === -1 || includeL < includeR)) return list.slice(0, includeL);
  
  if (includeR !== -1 && (includeL === -1 || includeR < includeL)) return list.slice(includeR + 1);
  
  return [];
}
