function squareSum(numbers){
  return numbers
    .map(num => num ** 2)
    .reduce(((acc, num) => acc + num), 0);
}
