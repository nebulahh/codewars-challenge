function wave(str){
  let result = [];
  for(let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      result.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
    } 
  }
  return result;
}
