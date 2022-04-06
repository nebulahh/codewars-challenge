// Find the capitals
var capitals = function (word) {
    var ara = []
    for(var i = 0; i < word.length; i++){
      if(word[i] == word[i].toUpperCase()){
        ara.push(i);
      }
    }
   return ara
  };