/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric.
But the following [1,2,2,null,3,null,3] is not.

*/
function isSymmetric(root) {
  if (!root) return true;

  let queue = [root.left, root.right];

  while (queue.length) {
    let currNode1 = queue.shift();
    let currNode2 = queue.shift();
    if (!currNode1 || !currNode2) {
      // compare to make sure they are both null
      if (currNode1 !== currNode2) return false;
    } else if (currNode1.val !== currNode2.val) return false;
    else {
      queue.push(currNode1.left);
      queue.push(currNode2.right);
      queue.push(currNode1.right);
      queue.push(currNode2.left);
    }
  }
  return true;
}
