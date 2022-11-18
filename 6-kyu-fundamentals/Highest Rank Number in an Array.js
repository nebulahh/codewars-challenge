function highestRank(arr){
  const occurence = {}
  let highestOccurence = 0
  
  arr.forEach(number => {
    occurence[number] = !occurence[number] ? 1 : occurence[number] + 1;
    if (occurence[number] > highestOccurence) {
      highestOccurence = occurence[number]
    }
  })
  
  const sorted = Object.keys(occurence).sort((a, b) => {
    return occurence[b] - occurence[a]
  }).filter(element => occurence[element] === highestOccurence)
  .sort((a, b) => +b - +a)
  
  return +sorted[0]
}
