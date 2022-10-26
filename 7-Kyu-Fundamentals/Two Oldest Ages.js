// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let srtedArray = ages.sort((a, b) => a - b)
  let u = [srtedArray[srtedArray.length -1], srtedArray[srtedArray.length -2]]
  return u.sort((a, b) => a - b)
}
