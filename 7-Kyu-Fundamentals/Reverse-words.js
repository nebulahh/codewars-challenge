function reverseWords(str) {
  let arr = str.split(' ')
  
  const newArr = arr.map(x => x.split('').reverse().join(''))
  
  return newArr.join(' ')
}
