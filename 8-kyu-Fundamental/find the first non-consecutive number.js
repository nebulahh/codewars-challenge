function firstNonCinsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i];
    }
  }
  return null;
}