function capitalize(s){
  let evenArr = [...s].map((val, i) => {
    if (i % 2 === 0) {
      return val.toUpperCase()
    } else {
      return val
    }
  })
  
  let oddArr = [...s].map((val, i) => {
    if (i % 2 === 1) {
      return val.toUpperCase()
    } else {
      return val
    }
  })
  let oddStr = oddArr.join('')
  let evenStr = evenArr.join('')
  return [evenStr, oddStr]
};
