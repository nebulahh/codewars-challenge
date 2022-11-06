function divCon(x){
  let str = 0;
  let num = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'string') {
      str += Number(x[i]); 
    } else {
      num += x[i];
    }
  }
  return num - str; 
}
