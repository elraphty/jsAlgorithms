/**
 * 
 * Harmless ransome note is an algorithm, that take in a checks 
 * if a a list of words in a string is present in another
 * string and also present in the right proportion
 * 
 */

function harmlessRansomeNote(noteText, magazineText) {
  // split the not text to an array
  let noteArray = noteText.split('');
  // split the maganzine text to an array
  let magazineArray = magazineText.split('');
  // create an empty objects for magazines
  let magazineObject = {};

  // loop through all magazine words
  magazineArray.forEach(word => {
    // if word key is not present in the magazineObject create key and set value to 0
    if(!magazineObject[word]) magazineObject[word] = 0;
    // else increase the value of the word key by 1
    magazineObject[word]++; 
  });

  // set note is possible to true it will a only be false if the words are not present in the right proportion
  let noteIsPossible = true;

  // loop through all noteArray words
  noteArray.forEach((note) => {
    // if there is a key in magazineObject with note word
    if(magazineObject[note]) {
      // minus the object value by 1
      magazineObject[note]--;
      // if magazineObject value is lesser than 0 it means the magazine object does not the note word it is ight proportion, so set it ti false
      if(magazineObject[note] < 0) noteIsPossible = false;
    } 
    // the key is not present so set noteIsPossible to false
    else noteIsPossible = false;
  });

  return noteIsPossible;
}

console.log(harmlessRansomeNote('i love u i love u', 'i love u my dear i'));