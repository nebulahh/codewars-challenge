function removeEveryOther(arr){
  return arr.filter((a, i) => {
    if (i === 0 || i % 2 === 0) {
      return a
    }
  })
}
