/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

Example
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = ""
Output: []

Input: digits = "2"
Output: ["a","b","c"
*/

function letterCombinations(digits) {
  if (!digits) return [];
  const possibilities = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let firstDigit = digits[0];
  let results = possibilities[firstDigit];

  // iterate through digits
  for (let i = 1; i < digits.length; i++) {
    let letters = possibilities[digits[i]];
    let tmpResults = [];
    // iterate through letters
    for (let j = 0; j < letters.length; j++) {
      let secondLetter = letters[j];
      // iterate through results
      for (let k = 0; k < results.length; k++) {
        let firstLetter = results[k];
        tmpResults.push(firstLetter + secondLetter);
      }
    }
    results = tmpResults;
  }
  return results;
}

letterCombinations('234');
