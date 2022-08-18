var isAnagram = function(test, original) {
    let testArr = test.split('').sort().sort((a, b) => a.localeCompare(b)).join('');
  let originalArr = original.split('').sort((a, b) => a.localeCompare(b)).join('');
  
  let str1 = testArr.toLowerCase()
  let str2 = originalArr.toLowerCase()
   return str1 === str2 ? true : false;  
};
