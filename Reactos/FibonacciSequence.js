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

let memo = { 0: 0, 1: 0 };

function fibonacci(n) {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
  }
}
