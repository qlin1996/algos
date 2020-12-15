// Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

// Given the root to such a tree, write a function to evaluate it.

// For example, given the following tree:

//     *
//    / \
//   +    +
//  / \  / \
// 3  2  4  5
// You should return 45, as it is (3 + 2) * (4 + 5).

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let n = new Node(
  '*',
  new Node('+', new Node(3), new Node(2)),
  new Node('+', new Node(4), new Node(5))
);

function expression(root) {
  if (!root.left && !root.right) return root.val;
  if (root.value === '+') return expression(root.left) + expression(root.right);
  if (root.value === '-') return expression(root.left) - expression(root.right);
  if (root.value === '*') return expression(root.left) * expression(root.right);
  if (root.value === '/') return expression(root.left) / expression(root.right);
}
