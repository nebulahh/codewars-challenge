String.prototype.toAlternatingCase = function () {
  let result = this.split('').map(str => {
    if(str === str.toUpperCase()) {
      return str.toLowerCase()
    } else {
      return str.toUpperCase()
    }
  })
  return result.join('')
}
