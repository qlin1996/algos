// Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum.

/*
Examples
subsetSum(2, [1, 10, 5, 3]); // false
subsetSum(10, [1, 10, 5, 3]); // true
subsetSum(9, [1, 10, 5, 3]); // true
*/

// Bottom Up Approach
function subsetSum(target, array) {
  let possibleSums = [0];
  for (let i = 0; i < array.length; i++) {
    let possibleSumsCopy = [...possibleSums];
    for (let j = 0; j < possibleSumsCopy.length; j++) {
      let newSum = array[i] + possibleSumsCopy[j];
      if (newSum === target) return true;
      else if (newSum < target) possibleSums.push(newSum);
    }
  }
  return false;
}

// Top Down Approach
function subsetSum(target, array, idx = 0, memo = {}) {
  if (memo[target]) return memo[target];
  if (target === 0) return true;
  if (target < 0 || idx === array.length) return false;

  const num = array[idx];
  const whenExcluded = subsetSum(target, array, idx + 1, memo);
  const whenIncluded = subsetSum(target - num, array, idx + 1, memo);
  const result = whenExcluded || whenIncluded;
  memo[target] = result;
  return result;
}
