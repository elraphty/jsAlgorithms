/**
 * Ceaser cipher is an algorithm that takes a given string and a number and shift each letter in the string by the given number passed.
 * 
 * 
 */

function caesarCipher(str, num) {
  // get the modulo of the nuber so that the number cannot be more than 26
  num = num % 26;
  // convert string to lowercase
  let lowerCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';
  
  //loop through lowercase string
  for(i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    // if the current letter is equals space add a space to new string and continue
    if(currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    // get the index of the curren letter in alphabet
    let currentIndex = alphabet.indexOf(currentLetter);
    // new index equal currentIndex plus number
    let newIndex = currentIndex + num;
    // if the new index is greater than 25 minus 26 from it to make it be in range
    if (newIndex > 25) newIndex = newIndex - 26;
    // if the new index is lesser than 0 plus 26 to it to make it be in range
    if (newIndex < 0) newIndex = 26 + newIndex;
    // if string is an upperCase letter make in an upercase letter in the newString
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
    
  return newString;
}

console.log(caesarCipher('Zoo Keeper', 300));