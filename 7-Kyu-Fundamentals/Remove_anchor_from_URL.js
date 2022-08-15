function removeUrlAnchor(url){
    let urlArr = url.split('')
  
   if (urlArr.includes('#')) {
     const index = urlArr.indexOf('#')
     urlArr.splice(index)
   }
  
  return urlArr.join('')
}
