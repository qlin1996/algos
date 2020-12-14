/* Write a function that takes a binary tree and returns the sum of its node's depth.

Example: Tree
              1                         0
        2           3                   1+1
    4      5      6     7               2+2+2+2
8     9                                 3+3
                                        Total: 16

*/

function nodeDepth(tree, sum = 0) {
  if (!tree) return 0;
  return (sum +=
    nodeDepth(tree.left, sum + 1) + nodeDepth(tree.right, sum + 1));
}
