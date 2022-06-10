function findNb(m) {
    let n = 0
    let total = 0
  
    while (total < m) {
     n +=1
     total += n**3
   }
  if (total === m) {
    return n
  } else {
    return -1
  }
}
