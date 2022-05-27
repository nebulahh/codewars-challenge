function minMax(arr) {
  let newArr = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  newArr.push(min, max);
  return newArr;
}