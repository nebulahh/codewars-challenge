// 12-05-22
function sumTwoSmallestNumbers(numbers) {  
  let smallestNum = numbers.sort((a,b) => a - b).slice(0, 2);
  return smallestNum.reduce((acc, i) => acc + i, 0)
}