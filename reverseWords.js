function reverseWords(str) {
  let strArr = str.split(' ');
  let reverseWordArray = [];

  strArr.forEach((str) => {
    let reverseWord = '';
    for(i = str.length - 1; i >= 0; i--) {
      reverseWord += str[i];
    }
    reverseWordArray.push(reverseWord);
  }); 

  return reverseWordArray.join(' ');
}

console.log(reverseWords('I love u my dear'));