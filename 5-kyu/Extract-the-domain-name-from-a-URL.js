function domainName(url){
  let srcStr = url.replace('http://', '').replace('https://','').replace('www.','').split(/[?#]/)[0]
  let domain = srcStr.split('.')[0]
  return domain
}
