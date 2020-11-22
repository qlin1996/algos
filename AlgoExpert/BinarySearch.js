//Takes in a sorted array and a target. Use binary search to return target's index. Return -1 if not present

/* Example
Array = [0,1,21,33,45,45,61,71,72,73]
Target = 33
*/

function binarySearch(array, target) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx - leftIdx) / 2) + leftIdx;
    console.log(leftIdx, midIdx, rightIdx);
    if (array[midIdx] === target) return midIdx;
    if (array[midIdx] > target) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }

  return -1;
}
