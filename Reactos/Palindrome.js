/* Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

Example: 
isPal('car') => false
isPal('racecar') => true
isPal('RaCecAr') => true
isPal('!? 100 ABCcba 001 ?!') => true
*/

function isPal(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left].toUpperCase() !== string[right].toUpperCase())
      return false;
    left++;
    right--;
  }
  return true;
}
