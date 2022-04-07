// 04-04-22
function removeSmallest(numbers) {
  if (numbers === []) {
    throw "TODO: removeSmallest";
    return numbers;
  } else {
    let copy = numbers.slice(0);
    copy.splice(numbers.indexOf(Math.min(...numbers)), 1);
    return copy;
  }
}
