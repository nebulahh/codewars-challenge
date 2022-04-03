// 02-04-22
// Fundamental
function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    let sortArr = array.sort((a, b) => {
      let nameA = a.length;
      let nameB = b.length;
      if (nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    })
    return sortArr;
  };