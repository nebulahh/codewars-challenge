function highAndLow(numbers) {
  let arr = numbers.split(' ')
  const min = String(Math.min(...arr))
  const max = String(Math.max(...arr))
  return `${max} ${min}`
}