var capitals = function (word) {
  let arr = []
  for(let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      let v = word.indexOf(word[i])
      arr.push(v)
    }
  }
  return arr
};
