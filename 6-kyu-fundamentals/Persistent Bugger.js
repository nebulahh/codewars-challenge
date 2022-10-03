function persistence(num) {
   let i = 0;
   while (String(num).length !== 1) {
     num = String(num).split("").reduce((a,b)=>a*b, 1);
     i++;
   }
   return i
}
