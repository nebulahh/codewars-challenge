function isIsogram(str) {
  let newStr = ''
  if (str.length === 0) {
    return true;
  } else {
    newStr = str.toLowerCase();
  } 
  const sortedArr = newStr.split('').sort()

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] === sortedArr[i]) {
      return false;
    }
  }
  return true;
}
