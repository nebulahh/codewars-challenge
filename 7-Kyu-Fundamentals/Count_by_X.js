// 04-05-22
function countBy(x, n) {
  let z = [];
  for(let i = 1; i <= n; i++){
    let product = x * i;
    z.push(product);
  }
  return z;
}