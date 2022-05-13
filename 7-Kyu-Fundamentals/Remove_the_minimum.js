// 13-05-22
function removeSmallest(numbers) {
  if (!numbers) return []
  let min = Math.min(...numbers)
  const minIndex = numbers.indexOf(min);
  return numbers.filter((i, index) => index !== minIndex);
}