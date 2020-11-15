/* Given an array of numbers sorted in ascending order (least to greatest), and a separate number (a "sum"), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

normal test cases
console.log(pairSum([1, 1, 2, 3, 4, 5], 7) ) //true
console.log(pairSum([1, 2, 3, 4, 5], 10) ) //false
console.log(pairSum([1, 2, 3, 7, 8], 7) ) //false
console.log(pairSum([1, 2, 3, 4, 5], 2) ) //false

edge test cases
console.log(pairSum([1], 2) ) //false
console.log(pairSum([], 2) ) //false
*/

// function pairSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     const sum = arr[left] + arr[right];
//     if (sum === target) return true;
//     if (target > sum) left++;
//     else right--;
//   }
//   return false;
// }

function pairSum(arr, target) {
  let memo = {};
  for (let num of arr) {
    const difference = target - num;
    if (memo[difference]) return true;
    else memo[difference] = true;
  }
  return false;
}
