// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid. All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')

/* Example
console.log('true? ', validParentheses("()" ))
console.log('false? ', validParentheses(")(()))" ))
console.log('false? ', validParentheses("(" ))
console.log('true? ', validParentheses("(())((()())())" ))
console.log('false? ', validParentheses("())("))
*/

function validParentheses2(parens) {
  const stack = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push(parens[i]);
    } else {
      if (!stack.length) return false;
      else stack.pop();
    }
  }
  return !stack.length;
}
