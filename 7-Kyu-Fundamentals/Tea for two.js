function tea42(input) {
  let str = String(input).split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '2') {
      str.splice(i, 1, 't')
    }
  }
  return str.join('')
};
