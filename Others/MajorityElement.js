/* 

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example:
Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

function majorityElement(array) {
  let majorityElement = array[0];
  let count = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== majorityElement) {
      count--;
      if (count === 0) {
        majorityElement = array[i];
        count++;
      }
    } else count++;
  }

  return majorityElement;
}
