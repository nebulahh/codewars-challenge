function stringClean(s){
  let str = ''
  for (let i = 0; i < s.length; i++) {
   str = s.replace(/[0-9]/g, '')
  }
  return str
}
