/**
 * isPalindrome is a function that returns true if a given 
 * number of words is the same when reversed e.g madam i'm adam 
 * when reversed it gives u the same word 
 * 
 */

function isPalinDrome(str) {
  // covert string to lowecase words
  str = str.toLowerCase();
  // make an array from each string word by spliting
  let charArray = str.split('');
  // make a string of valid characters unwanted characters won't count
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // create new array to hold only valid characters in charArray
  let lettersArr = [];
  charArray.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  // if the letter array converted to string is equal to letter array.reverse converted to string set to true else set to false
  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalinDrome(" Madam I'm adam "));