export function JournalEntry(title, body) {
  this.titleEntry = title;
  this.bodyEntry = body; 
}

JournalEntry.prototype.vowelCount = function () {
  let vowelCount = 0;
  const vowelArray = ["a", "e", "i", "o", "u", "y"];
  
  for (const letter of this.bodyEntry.toLowerCase()) {
    for(var i=0; i <= vowelArray.length; i++) {
      if (letter === vowelArray[i]) {
        vowelCount++;
        break;
      } 
    }
  }
  return vowelCount;
}

JournalEntry.prototype.consonantCount = function () {
  const consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  let consonantCount = 0;
  
  for(const letter of this.bodyEntry.toLowerCase()) {
    for(var i=0; i <= consonantArray.length; i++) {
      if(letter === consonantArray[i]) {
        consonantCount++;
        break;
      }
    }
  }
  return consonantCount;
}

JournalEntry.prototype.getTeaser = function () {

  const firstPeriodLocation = this.body.indexOf(".");
  const firstSentence = this.body.slice(0, firstPeriodLocation + 1);
  const firstSentenceWordArray = firstSentence.split(" ");

  if(firstSentenceWordArray > 8) {
    const firstEightWordsArray = firstSentenceWordArray.slice(0, 9);
    const firstEightWords = firstEightWordsArray.join(" ") +  "....";
    return firstEightWords;
  } else {
    return firstSentence;
  }
}




