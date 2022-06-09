function squareDigits(num){
  let str = String(num)
  return Number(str.split('').map(a => a**2).join(''))
}
