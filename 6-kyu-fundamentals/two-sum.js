function twoSum(numbers, target) {
    let indexes = [];

    for(let i = 0; i < numbers.length; i++){
       for(let j = i + 1; j < numbers.length; j++){
          if (numbers[i] + numbers[j] === target) {
        indexes.push(i);
        indexes.push(j);
          }
       }
    }
    return indexes;
}
