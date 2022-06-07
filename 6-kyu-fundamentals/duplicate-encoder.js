function duplicateEncode(word){
  let letterCount = {};
  let letters = word.toLowerCase().split('');

  letters.forEach(function(letter) {
    if (letterCount.hasOwnProperty(letter)) {
      letterCount[letter] += 1
    } else {
      letterCount[letter] = 1
    }
  });

  let parens = letters.map(function(letter) {
    if (letterCount[letter] === 1) {
      return '('
    } else {
      return ')'
    }
  })
  return parens.join('');
}
