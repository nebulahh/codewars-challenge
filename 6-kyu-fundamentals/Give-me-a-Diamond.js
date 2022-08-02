function diamond(n){
 if (n < 0 || n % 2 === 0) return null;  

  let numSpace = 0;
  let result = '*'.repeat(n) + '\n'; 

  for (let numStar = n - 2; numStar >= 1; numStar -= 2) {
    let nextRow = ' '.repeat(++numSpace) + '*'.repeat(numStar) + `\n`;
    result = nextRow + result + nextRow;
  }
  return result;
}
