function maskify(cc) {
  if (cc.length > 4) {
  let arr = cc.split('')
  let slicedArr = arr.slice(arr.length - 4)
  let cutArr = arr.splice(0, arr.length - 4)
  const hash = cutArr.map(val => '#')
  const res = hash.concat(slicedArr)
  return res.join('')
  } 
  return cc
}
