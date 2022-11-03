function dontGiveMeFive(start, end) {
  let count = []
  for (let i = start; i <= end; i++) {
    if (String(i).includes(5)) continue
    count.push(i)
  }
  return count.length
}
