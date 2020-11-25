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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function merge2List(list1, list2) {
  let newList = new Node(0);
  let end = newList;

  while(list1)
}
