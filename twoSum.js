function twoSum(numArray, sum) {
  let pairs = [];
  let hashTable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    // console.log('Current Num', currNum);
    let counterpart = sum - currNum;
    // console.log('Hash Table Path', hashTable);
    if(hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));