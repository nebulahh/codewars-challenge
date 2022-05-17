// 16-05-22
function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false; 
      return num > 1;  if (num === 2) {
      return true, num + ' is prime';
    }
    if (num % 2 === 0 || num <= 1) {
      return false, num + ' is not prime';
    } 
}
