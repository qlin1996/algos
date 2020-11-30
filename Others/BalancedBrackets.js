// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid. All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')

/* Example
console.log('true? ', validParentheses("()" ))
console.log('false? ', validParentheses(")(()))" ))
console.log('false? ', validParentheses("(" ))
console.log('true? ', validParentheses("(())((()())())" ))
console.log('false? ', validParentheses("())("))
*/

function validParentheses2(string) {
  let stack = [];
  let obj = { '(': ')', '[': ']', '{': '}' };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (obj[char]) {
      stack.push(char);
    } else {
      const endBrace = stack.pop();
      if (obj[endBrace] !== char) {
        return false;
      }
    }
  }
  return !stack.length;
}
