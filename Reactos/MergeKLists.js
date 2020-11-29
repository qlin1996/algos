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
  let curr = newList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list2) curr.next = list2;
  if (list1) curr.next = list1;

  return newList.next;
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;
  let interval = 1;
  while (interval < lists.length) {
    let index = 0;
    while (index + interval < lists.length) {
      lists[index] = merge2List(lists[index], lists[index + interval]);
      index = interval * 2 + index;
    }
    interval *= 2;
  }
  return lists[0];
}
