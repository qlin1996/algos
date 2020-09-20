// Given a binary tree, write a function that will return the node at the deepest level of the tree. You may assume there is a unique deepest node.

/*
Example
function node(val) {
  return {
    val,
    left: null,
    right: null
  };
}
let a = node('a');
let b = node('b');
let c = node('c');
let d = node('d');
let e = node('e');
let f = node('f');

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;

findDeepestDFS(a) //Result: f
*/

// Depth First
function findDeepestDFS(node) {
  let deepestNode = node;
  let deepestLevel = 0;

  function find(node, level = 0) {
    if (level > deepestLevel) {
      deepestNode = node;
      deepestLevel = level;
    }
    if (node.left) find(node.left, level + 1);
    if (node.right) find(node.right, level + 1);
  }

  find();
  return deepestNode;
}

// Breadth First
function findDeepestDFS(node) {
  let queue = [node];
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return current;
}
