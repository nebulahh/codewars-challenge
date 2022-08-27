function fakeBin(x){
  let arrStr = x.split('')
  arrStr.map((a,i) => {
    if (Number(a) < 5) {
      arrStr[i] = 0
    }
    
    if (Number(a) >= 5) {
      arrStr[i] = 1
    }
  })
  
  return arrStr.join('')
}
