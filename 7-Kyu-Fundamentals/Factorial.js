function factorial(n) {
  if (n === 0) {
     return 1
    }
  if (n < 0 || n > 12) {
    throw new RangeError('enter a less or high number')
    }
  return n * factorial(n - 1)
}
