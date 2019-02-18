/**
 * 
 * Binary Search is a very popular algorithm is the most efficient algorithm for searching a given set of data, Binary search is a Logarithmic Runtime Big O Notation "0 (log n)", it can be implemented with a recursive function, or a while loop, this example i made use of a recursive function (you can check the bigONotation.js file for a binarySearch implemented with a while loop), so what binary search does is it searches for a key in a given set of data it starts from the middle of a sorted data if the key is the middle element in the dataset it returns else if they key is greater than the middle element is splices the array into two forget about the lower part of the array and search the upper part of the array and vise versa if the key is lesser than the middle element, it returns -1 if the key is not found
 * 
 */

function binarySearch(numArray, key) {
  // get the middle index
  let middleIdx = Math.floor(numArray.length / 2);
  // get the middle index value
  let middleElem = numArray[middleIdx];
  
  // if the key is equals the middle element return true
  if (middleElem === key) return true;
  // if the key is lesser than the middle element and array.length is greater than 1 splice the array remove the items from the middle index to the ending of the array and call binarySearch recursively search again with the key
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  // if the key is greater than the middle element and array.length is greater than 1 splice the array remove the items from the index 0 to the middle of the array and call binarySearch recursively and search again with the key
  else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  }
  // I have search all through the array i can't find a result so i will return -1
  else return -1;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));