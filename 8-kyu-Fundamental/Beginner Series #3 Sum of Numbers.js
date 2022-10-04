function getSum( a,b ) {
  let res = 0
   if (a === b) {
     return a
   } else if (a > b) {
     for (let i = b; i <= a; i++) {
       res += i
     }
   } else if (b > a) {
     for (let i = a; i <=b; i++) {
       res += i
     }
   }
  return res
}
