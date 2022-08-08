function digitize(n) {
  let reversedArr = String(n).split('').reverse()
  return reversedArr.map(val => Number(val))
}
