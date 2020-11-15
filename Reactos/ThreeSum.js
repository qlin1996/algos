/* Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.

arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)   //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35)    //should return []
arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)  //should return [[ -3, 1, 12 ]]
*/

// function arrayThreeSum(arr, target) {
//   arr.sort((a, b) => a - b);

//   let finalArr = [];
//   for (let i = 0; i < arr.length - 2; i++) {
//     let left = i + 1;
//     let right = arr.length - 1;
//     while (left < right) {
//       let sum = arr[i] + arr[left] + arr[right];
//       if (sum === target) {
//         finalArr.push([arr[i], arr[left], arr[right]]);
//         left++;
//         right--;
//       } else if (sum < target) left++;
//       else right--;
//     }
//   }
//   return finalArr;
// }

function arrayThreeSum(arr, target) {
  let finalArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let memo = {};
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];
      let difference = target - num1 - num2;
      if (memo[difference]) finalArr.push([num1, num2, difference]);
      else memo[num2] = true;
    }
  }
  return finalArr;
}
