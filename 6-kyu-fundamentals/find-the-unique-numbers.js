function findUniq(arr) {
  
let counter = {};
for (element of arr.flat()) {
    if (counter[element]) {
        counter[element] += 1;
    } else {
        counter[element] = 1;
    }
};
  let  [lowestItems] = Object.entries(counter).sort(([ ,v1], [ ,v2]) => v1 - v2);

  return Number(lowestItems[0])
}
