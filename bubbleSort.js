function bubbleSort(array) {
  for (i = array.length; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        // console.log('Temp', temp);
        array[j] = array[j + 1];
        // console.log('A', array[j]);
        array[j + 1] = temp;
        // console.log('Final', array[j + 1]);
      }
    }
  }
    
  return array;
}
 
bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);