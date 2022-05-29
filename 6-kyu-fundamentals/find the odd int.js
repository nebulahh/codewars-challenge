function findOdd(A) {
  for (let i = 0; i <= A.length-1; i += 1) {
   
   let elemLength = A.filter((elm) => elm === A[i]).length;
   
   if (elemLength % 2 !== 0) {
     return A[i];
   }
 }
}