function sumDigits(number) {
  let str = String(Math.abs(number))
  let arr = str.split('')
  return arr.map(e => Number(e)).reduce((acc, val) => acc + val, 0)
}
