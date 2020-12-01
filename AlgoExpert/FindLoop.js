/* 
Write a function that takes in the head of Singly Link that contains a loop. The function should return the node from which the loop originates in constant space.

0->1->2->3->4->5->6->7->8->9 ->4
the 9 points to 4 instead of null
 */

function findLoop(head) {
  let first = head.next;
  let second = head.next.next;
  while (first !== second) {
    first = first.next;
    second = second.next.next;
  }
  first = head;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return first;
}
