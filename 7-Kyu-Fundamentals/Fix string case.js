function solve(s){
    let count = 0
    for(let i = 0; i< s.length; i++){
      if(s[i] === s[i].toUpperCase()) count++
    }
  return count <= s.length/2 ? s.toLowerCase(): s.toUpperCase()
}
