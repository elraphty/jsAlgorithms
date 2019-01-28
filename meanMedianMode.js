function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  let sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  
  let mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort((a, b) => { return a - b });
  let median;
  
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    let mid1 = array[(array.length / 2) - 1];
    let mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  
  return median;
}

function getMode(array) {
  let modeObj = {};
  
  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  
  // create array of mode/s 
  let maxFrequency = 0;
  let modes = [];
  for (num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}


meanMedianMode([9,10,23,10,23,9]);
