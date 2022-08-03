function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((acc, curr) => acc + curr, 0)
  const average = sum / classPoints.length
  
  return average > yourPoints ? false : true
}
