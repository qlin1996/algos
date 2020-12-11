/* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
*/

function productExceptSelf(array) {
  let left = [1];
  for (let i = 0; i < array.length - 1; i++) {
    left.push(left[i] * array[i]);
  }
  let right = [1];
  for (let j = 0; j < array.length - 1; j++) {
    right.unshift(right[right.length - 1 - j] * array[array.length - 1 - j]);
  }
  let results = [];
  for (let k = 0; k <= array.length - 1; k++) {
    results.push(left[k] * right[k]);
  }
  return results;
}
