function stray(numbers) {
  let obj = {}
  let maxVal = 0
  let max = []
  let arr = []
  for (let val of numbers) {
    if (obj.hasOwnProperty(val)) {
      obj[val]++
    } else {
      obj[val] = 1
    }
  }
  
  arr = Object.keys(obj)
  max = Object.values(obj)
  maxVal = Math.min(...max)
  
  return Number(arr[max.indexOf(maxVal)])
}
