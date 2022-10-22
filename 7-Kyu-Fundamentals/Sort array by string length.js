function sortByLength (array) {
  const newArr = array.sort((a, b) => {
    const val = a.length
    const val2 = b.length
    if (val < val2) {
      return -1
    } else if (val > val2) {
      return 1
    }
    return 0
  })
  return newArr
};
