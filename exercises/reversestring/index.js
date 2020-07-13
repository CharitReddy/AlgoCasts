// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//------------Solution 3 ------------
function reverse(str) {
  return str
    .split('')
    .reduce((reversedString, character) => character + reversedString, '');
}

module.exports = reverse;

//------------Solution 1 ------------
// function reverse(str) {
//     return str.split('').reverse().join('');
//   }

//------------Solution 2 ------------
// function reverse(str) {
//     let reversedString = '';

//     for (let character of str) {
//       reversedString = character + reversedString;
//     }
//     return reversedString;
//   }
