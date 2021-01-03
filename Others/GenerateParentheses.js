/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Input: n = 1
Output: ["()"]

*/

function generateParenthesis(n) {
  let arr = [];
  function recurse(num, string, open, array) {
    const close = string.length - open;
    if (string.length === num * 2) array.push(string);
    if (open < num) recurse(num, string + '(', open + 1, array);
    if (open > close) recurse(num, string + ')', open, array);
    return array;
  }
  return recurse(n, '', 0, arr);
}
