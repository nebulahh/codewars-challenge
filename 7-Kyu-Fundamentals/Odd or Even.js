function oddOrEven(array) {
   const num = array.reduce((prev, curr) => prev + curr, 0)
   if (num % 2 === 0 || num === 0 || !num) {
     return 'even'
   } else {
     return 'odd'
   }
}
