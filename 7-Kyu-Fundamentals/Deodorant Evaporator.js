function evaporator(content, evap_per_day, threshold){ 
  const evaporatedPercent = (evap_per_day / 100)
  const minThresh = (threshold / 100)

  let minThresVal = content * minThresh
  let totalDays = 0;
  
  while (content >= minThresVal) {
    content -= (content * evaporatedPercent)
    
    totalDays++
  }
  return totalDays
}
