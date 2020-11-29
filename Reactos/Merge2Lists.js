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
  let prev = null;
  let p2 = headTwo;

  while (p1 && p2) {
    if (p2.value > p1.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev) prev.next = p2;
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }

  if (p2) prev.next = p2;
  return headOne.value < headTwo.value ? headOne : headTwo;
}

const node = (value) => ({
  value,
});

const two = node(2);
const six = node(6);
const seven = node(7);
const eight = node(8);
two.next = six;
six.next = seven;
seven.next = eight;
console.log(two);

const one = node(1);
const three = node(3);
const four = node(4);
const five = node(5);
const nine = node(9);
const ten = node(10);
one.next = three;
three.next = four;
four.next = five;
nine.next = ten;
console.log(one);
