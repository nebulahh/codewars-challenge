function queueTime(customers, n) {
   let newArr = new Array(n).fill(0);

   for (let i = 0; i < customers.lenght; i++) {
     let index = newArr.indexOf(Math.min(...newArr))
     newArr[index] = customers[i]
   }
   return Math.max(...newArr);
}
