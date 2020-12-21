/* 
Given inorder and postorder traversal of a tree, construct the binary tree.

Example:
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]

*/

function buildTree(inorder, postorder) {
  if (inorder.length === 0) return null;
  let val = postorder.pop();
  let root = new TreeNode(val);
  let rootIdx = inorder.indexOf(val);

  let left = inorder.slice(0, rootIdx);
  let right = inorder.slice(rootIdx + 1);
  root.right = buildTree(right, postorder);
  root.left = buildTree(left, postorder);
  return root;
}
