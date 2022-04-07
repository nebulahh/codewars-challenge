// 02-04-22
function sortByLength(array) {
  let sortArr = array.sort((a, b) => {
    let nameA = a.length;
    let nameB = b.length;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortArr;
}
