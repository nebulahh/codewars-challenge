function printerError(s) {
    const len = s.length
    let count = 0
    
    const alpha = Array.from(Array(13)).map((e, i) => i + 110);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    
    for (let i = 0; i < s.length; i++) {
      if (alphabet.includes(s[i])) {
        count += 1
      }
    }
  return `${count}/${len}`
}
