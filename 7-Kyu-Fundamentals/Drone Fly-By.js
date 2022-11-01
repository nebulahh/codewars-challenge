function flyBy(lamps, drone){
  let dronePathCount = 1
  for (let i = 0; i < drone.length; i++) {
    if (drone[i] === '=') {
      dronePathCount++
    }
  }
  const res = lamps.split('').map((val, i) => {
    if (i < dronePathCount) {
      return 'o'
    } else {
      return val
    }
  }).join('')
  return res
  
}
