/* Write a function that takes a BST and a target number and returns the closest value to that target value contained in the BST.

Example: Tree
              10                        
        5            15                  
    2      3     13     22               
1                   14
Target: 12 so the closest value is 13
 */

function findClosestValueInBST(tree, target, closestNode = tree) {
  if (!tree) return closestNode.value;

  let smallestDiff = Math.abs(closestNode.value - target);
  let currDiff = Math.abs(tree.value - target);
  if (currDiff < smallestDiff) closestNode = tree;
  if (target > tree.value) {
    return findClosestValueInBST(tree.right, target, closestNode);
  } else {
    return findClosestValueInBST(tree.left, target, closestNode);
  }
}
