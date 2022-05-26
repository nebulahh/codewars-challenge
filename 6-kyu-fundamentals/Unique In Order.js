var uniqueInOrder=function(iterable){
  let arr = [];

//   loop thru the string
for (let i = 0; i < iterable.length; i++) {
//    check if a character at index is not equal character at next index  
if (iterable[i] !== iterable[i+1]) {
//       if true push to array
  arr.push(iterable[i]);
}
}

return arr;
}