// Constant Runtime Big O Notation "0 (1) "

function log (arr) {
  console.log(arr[0]);
  console.log(arr[1]);
}

// log([1, 5, 6, 7]);
// log([2, 4]);

// Linear Runtime Big O Notaion "0 (n)"

function logAll(arr) {
  for(i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// logAll([1, 5, 6, 7]);
// logAll([2, 4, 6, 7, 8, 9]);
// logAll([2, 4, 6, 7, 8, 9, 10, 11, 22, 11]);

// Exponential Runtime Big O Notation "0 (n ^ 2)"

function addAndLog(arr) {
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }      
}

// addAndLog([1, 2, 4, 5, 6, 7]);
// addAndLog([1, 2, 4, 5, 6, 7, 5, 5, 6, 6, 7]);

// Logarithmic Runtime Big O Notation "0 (log n)"

function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let element;

  while(low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    // console.log('mid', mid)
    element = arr[mid];
    if(element < key) {
      low = mid + 1;
      // console.log('low', low)
    } else if(element > key) {
      high = mid - 1;
      // console.log('high', high)
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5));