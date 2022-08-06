function positiveSum(arr) {
  let newArr = arr.filter(num => num > 0)
  return newArr.reduce((acc,curr) => acc + curr,0)
}
