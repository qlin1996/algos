/* 
Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

Example
headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1
mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1
*/

function merge2ListsInPlace(headOne, headTwo) {
  let p1 = headOne;
  let p2 = headTwo;
  let prev = null;

  while (p1 || p2) {
    if (p2.value > p1.value) {
      p1 = p1.next;
      prev = p1;
    } else {
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }
  if (p2) p1.next = p2;
  return headOne.value < headTwo.value ? headOne : headTwo;
}
