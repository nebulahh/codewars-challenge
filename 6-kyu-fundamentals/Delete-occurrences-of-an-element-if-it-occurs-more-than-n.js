// Delete occurrences of an element if it occurs more than n times

function deleteNth(arr,n){
  var cache = {};
  return arr.filter(function(x) {
    cache[x] = (cache[x] || 0) + 1;
    return cache[x] <= n;
  });
}
