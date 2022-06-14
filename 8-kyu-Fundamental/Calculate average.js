function find_average(array) {
  if (array.length === 0) return 0;
 
  let newArr = array.reduce((acc, curr) => acc + curr, 0)
  return newArr / array.length
  
}
