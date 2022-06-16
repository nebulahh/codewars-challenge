function solution(string) {
   let newStr = string.split('')
   .map(b => b.replace(b.toUpperCase(), ' ' + b.toUpperCase()))
   
   return newStr.join('')
}
