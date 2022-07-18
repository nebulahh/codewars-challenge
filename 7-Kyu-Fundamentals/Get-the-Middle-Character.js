function getMiddle(s) {
  let v = s.split('')
  if (v.length % 2 === 0) {
    return v[Math.floor(v.length / 2) - 1] + v[Math.floor(v.length / 2)]
  } else {
    return v[Math.floor((v.length) / 2)]
  }
}
