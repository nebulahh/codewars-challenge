function gimme (triplet) {
  let middle = 0
  const trip = [...triplet]
  
    const sortedArr = trip.sort((a, b) => a - b)
    middle = sortedArr[Math.floor((sortedArr.length ) / 2)];
  
  return triplet.indexOf(middle)
}
