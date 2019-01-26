function harmlessRansomeNote(noteText, magazineText) {
  let noteArray = noteText.split('');
  let magazineArray = magazineText.split('');
  let magazineObject = {};

  magazineArray.forEach(word => {
    if(!magazineObject[word]) magazineObject[word] = 0;
    magazineObject[word]++; 
  });

  let noteIsPossible = true;
  noteArray.forEach((note) => {
    if(magazineObject[note]) {
      magazineObject[note]--;
      if(magazineObject[note] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });

  return noteIsPossible;
}

console.log(harmlessRansomeNote('i love u i love u', 'i love u my dear'));