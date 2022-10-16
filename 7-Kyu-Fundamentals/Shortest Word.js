function findShort(s){
  let arr = s.split(' ');
  const result = arr.map(val => val.length);
  return Math.min(...result);
}
