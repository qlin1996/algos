/*
Given a number n, print n-th Fibonacci Number.
The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …….

Example
Input  : n = 2
Output : 1

Input  : n = 9
Output : 34
*/

let memo = {};

function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  if (memo[n]) return memo[n];
  return fibonacci(n - 1) + fibonacci(n - 2);
}
