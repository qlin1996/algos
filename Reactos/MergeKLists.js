/* Write a function that takes in the heads of N sorted Singly Linked Lists and return the merged list. The merged list should be in sorted order.

Each Linked List node has an integer value as well as a next node pointing to the next node in the list or to none / null if it is the tail of the list. 

Input =
[
  1->5->7,
  1->2->4->8,
  3->6->8
]

Output = 1->1->2->3->4->5->6->7->8->8
*/

function merge2List(list1, list2) {
  let p1 = list1.head;
  let p2 = list2.head;
  let p1Prev = null;
  while (p1.next || p2.next) {
    if (p2.value > p1.value) {
      p1Prev = p1;
      p1 = p1.next;
      p1Prev.next = p2;
      p2 = p2.next;
      p1Prev = prev.next;
      p1Prev.next = p1;
    }
  }
}
