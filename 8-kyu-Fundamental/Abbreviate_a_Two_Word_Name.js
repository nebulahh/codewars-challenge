function abbrevName(name){
   let arr = []
   name.split(' ').forEach(b => {
    arr.push(b.charAt(0).toUpperCase())
  })
    return arr.join('.')
}
