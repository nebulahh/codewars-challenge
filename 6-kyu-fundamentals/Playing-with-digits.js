function digPow(n, p){
  let str = String(n).split('')
  let val = str.map((e,i) => Number(e)**(p+i))
           .reduce((acc, val) => acc + val, 0)
 
  let k = val / n
  let a = n ** p
  
  if (a === val) {
    return p
  }
  else if (val % n === 0) {
   return k 
 }
  else {
    return -1
  }
  
}
