var checkWord = require('check-word'),
    words     = checkWord('en');
/**
 * 
 * @param {String[]} letters 
 * @returns {String[]}
 */
const allPossibleCombinationOfLetters = (letters) => {
    var posibleCombs = [];
    if (letters.length == 1) return letters;
    for (var k in letters) {
      var letter = letters[k];
      allPossibleCombinationOfLetters(letters
        .join('')
        .replace(letter, '')
        .split(''))
        .concat("")
        .map(
          (subLetters) => posibleCombs.push(letter.concat(subLetters)));
    }
    return posibleCombs;
}

/**
 * 
 * @param {String[]} combinations 
 */
const getAllCorrectWords = (combinations) => combinations.filter(word => (word.length > 1 && words.check(word)))


const letters = "PRESENTATION"
const combinations = allPossibleCombinationOfLetters(letters.split(''))
const validWords = getAllCorrectWords(combinations);
console.log(`Total Valid Words from '${letters}' is: ${validWords.length} \n and those are:`,validWords)