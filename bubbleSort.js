/**
 * 
 * Bubble sort is a popular sorting algorithm that properly sorts an array in ascending order using Exponential Runtime Big O Notation "0 (n ^ 2).
 */

function bubbleSort(array) {
  // loop through the entire array in descending order
  for (i = array.length; i > 0; i--) {
    // loop through the array in ascending order an j will be the max length of the array i.e if the i is 4 it will only loop through 0 to 3
    for (j = 0; j < i; j++) {
      // if the current element is greater than the next element
      if (array[j] > array[j + 1]) {
        // create a temp variable to hold current element
        let temp = array[j];
        // set current element to the next element since the next element is lesser
        array[j] = array[j + 1];
        // set the next element to the current element since the current element value is gretaer
        array[j + 1] = temp;
      }
    }
  }
    
  return array;
}
 
console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]));