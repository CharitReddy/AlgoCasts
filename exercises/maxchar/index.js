// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strObj = {};
  let max = 0;
  let maxChar = '';

  //To create an object with all the characters as keys and values as their count.
  //With an if else to check if the key already exists.
  //   for (const char of str) {
  //     if (!strObj[char]) {
  //       strObj[char] = 1;
  //     } else {
  //       strObj[char] + 1;
  //     }
  //   }
  //Without the conditions.
  for (const char of str) {
    strObj[char] = strObj[char] + 1 || 1;
  }

  for (const char in strObj) {
    if (strObj[char] > max) {
      max = strObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
