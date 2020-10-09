//Takes in a sorted array and a target. Use binary search to return target's index. Return -1 if not present

/* Example
Array = [0,1,21,33,45,45,61,71,72,73]
Target = 33
*/

function binarySearch(array, target) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    const potentialMatch = array[middleIdx];

    if (target === potentialMatch) {
      return middleIdx;
    } else if (target < potentialMatch) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return -1;
}
