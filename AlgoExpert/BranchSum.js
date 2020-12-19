/* Write a function that takes in a binary tree and returns a list of its branch sums ordered from the leftmost branch sum to rightmost branch sum. A branch sum is the sum of all values in a binary tree branch. A binary tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
 */

function branchSums(root, sums = [], sum = 0) {
  sum += root.value;
  if (!root.left && !root.right) sums.push(sum);
  if (root.left) branchSums(root.left, sums, sum);
  if (root.right) branchSums(root.right, sums, sum);
  return sums;
}
