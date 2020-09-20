/* Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

The array that is returned should only contain unique values and its elements should be in alphabetical order. */

/* Examples
stringPermutations('one');
should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
stringPermutations('app');
should return  [ 'app','pap','ppa']
stringPermutations('nn'); //should return  [ 'nn' ] */

function stringPermutations(string) {
  const results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    const charsLeft = string.slice(0, i) + string.slice(i + 1);
    const innerPermutations = stringPermutations(charsLeft);
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

// sort before finding all permutations
function sortedStringPermutations(str) {
  const sortedStr = str.split("").sort().join("");
  return stringPermutations(sortedStr);
}
