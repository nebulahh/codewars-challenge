function mergeArrays(arr1, arr2) {
  let merge = [...arr1, ...arr2]
  
  let sortMerge = [];
merge.forEach((c) => {
    if (!sortMerge.includes(c)) {
        sortMerge.push(c);
    }
});
  
  sortMerge.sort((a, b) => a - b)
  return sortMerge
}
