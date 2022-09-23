function reverse(string){
  let arr = string.split('')
  let newArr = arr.reverse().join('')
  let ano = newArr.split(' ')
  let rev = []
   for (let i = 0; i < ano.length; i++) {
     rev.push(ano[i].split('').reverse().join(''))
  }
  return rev.join(' ')
}
