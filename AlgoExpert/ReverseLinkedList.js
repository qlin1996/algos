/* 
Write a function that takes in the head of a singly linked list, reverses the lists in place and returns its new head.

Example
0->1->2->3->4->5 should return 5->4->3->2->1->0
*/

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = prev.next;
    curr = next;
  }

  return prev;
}
