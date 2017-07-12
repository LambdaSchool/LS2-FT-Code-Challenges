/* 
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  const list = str.split('').sort();
    for (let i = 0; i < str.length; i++) {
      if (list[i] === list[i+1]) {
        return false;
      }
      return true;
    }

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
