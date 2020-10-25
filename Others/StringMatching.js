// Given an array of words. Return an array of words which are subset of other words in the array.

// Example
// ["mass","as","hero","superhero"] should return ["as","hero"]

var stringMatching = function (array) {
  return array.filter((word, idx) => {
    for (let i = 0; i < array.length; i++) {
      if (i === idx || word.length > array[i].length) continue;
      if (subSection(array[i], word)) return true;
    }
    return false;
  });
};

function subSection(word, subword) {
  let array = word.split(subword);
  return array.length > 1;
}
