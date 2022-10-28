function reverseLetter(str) {
  let res = '' 
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      res += str[i]
    } else {
      res += ''
    }
  }
  return [...res].reverse().join('')
}
