function descendingOrder(n){
  let reverse = n.toString().split('').sort().reverse()
  return Number(reverse.join(''))
}
