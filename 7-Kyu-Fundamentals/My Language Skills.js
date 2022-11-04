function myLanguages(results) {
  let res = []
  for (let i in results) {
    if (results[i] >= 60) {
      res.push(i)
    }
  }
  return res.sort((a, b) => results[b] - results[a])
}
