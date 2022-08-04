String.prototype.toJadenCase = function () {
  
  let arr = this.split(' ') 
let str = [...arr]
let newArr2 = str.map(x => x.slice(1))
let newArr = arr.map(x => x.charAt(0).toUpperCase())
const hi = newArr.map((x, i) => x + newArr2[i])
return hi.join(' ')
};
