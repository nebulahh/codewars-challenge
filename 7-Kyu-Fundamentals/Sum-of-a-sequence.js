const sequenceSum = (begin, end, step) => {
  let result = 0;
  
  if (begin > end) {
    return 0;
  }

  for (let i = begin; i <= end; i = i + step) {
    result += i;
  }
  
  return result;
};
