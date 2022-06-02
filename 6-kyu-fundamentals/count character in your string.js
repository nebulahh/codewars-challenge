function count(string) {
  let counter = {};
  string.split('').forEach((e) => {
    if (counter.hasOwnProperty(e)) {
      counter[e] += 1
    } else {
      counter[e] = 1
    }
  });
  if (string === {}) return {}
  return counter
}