function duplicateCount(text){
  let result = 0;
  let obj = {};  
  text.toLowerCase().split('').map(str => {
    if (!obj.hasOwnProperty(str)) {
      obj[str] = 0;
    } else {
        if (obj[str] === 0) {
        result += 1;
        }
    obj[str] = obj[str] + 1;      }
  });  
  return result;
}