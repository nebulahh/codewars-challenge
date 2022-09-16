//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!

function sumDigPow(a, b) {
  let num = []
  for(let i = a; i < b; i++) {
    let str = String(i).split('')
    if(i == str.reduce((accumulator, currentValue, currentIndex) => {
     return accumulator + currentValue**(currentIndex+1);
   }, 0)){
     num.push(i);
   }
  }
 return num
}
