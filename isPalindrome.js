function isPalinDrome(str) {
  str = str.toLowerCase();
  let charArray = str.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let lettersArr = [];
  charArray.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalinDrome(" Madam I'm adam "));