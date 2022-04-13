// 13-04-22
function findNeedle(haystack) {
    let found = haystack.filter(word => word === 'needle');
    if(found) {
      return `found the needle at position ${haystack.indexOf('needle')}`;
    }
  }