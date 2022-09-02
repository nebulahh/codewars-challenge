// 2 sep 2022

function sumArray(array) {
  if (!array || array.length === 1) {
    return 0
  }
  
  array.sort((a,b) => a - b)
  array.shift()
  array.pop()
  return array.reduce((x,y) => x + y, 0)
}
