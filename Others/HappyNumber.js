/*

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

*/

function happyNumber(n) {
  let seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    let string = n.toString();
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      let sq = Number(string[i]) * Number(string[i]);
      sum += sq;
    }
    n = sum;
  }
  return n === 1 ? true : false;
}
