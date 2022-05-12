// 12-05-22
function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
    return []
  } else {
    let pos = input.filter(num => num > 0)
  let neg = input.filter(num => num < 0)
  let sumNeg = neg.reduce((acc, i) => acc + i, 0)
  let newArr = []
  newArr.push(pos.length)
  newArr.push(sumNeg)
  return newArr
  }
}