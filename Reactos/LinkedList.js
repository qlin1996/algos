class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let currNode = this.head;
    let newTail = currNode;
    while (currNode.next) {
      newTail = currNode;
      currNode = currNode.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (!this.length) this.head = this.tail = null;
    currNode.next = null;
    return currNode;
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.head = this.tail = null;
    oldHead.next = null;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx >= this.length || idx < 0) return undefined;
    let currNode = this.head;
    while (idx) {
      currNode = currNode.next;
      idx--;
    }
    return currNode;
  }
  set(idx, value) {
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) this.unshift(val);
    else if (idx === this.length) this.push(val);
    else {
      const newNode = new Node(val);
      const preNode = this.get(idx - 1);
      const postNode = preNode.next;
      preNode.next = newNode;
      newNode.next = postNode;
      this.length++;
    }
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.shift();
    else if (idx === this.length - 1) return this.pop();
    else {
      const nodeRightBefore = this.get(idx - 1);
      const nodeToRemove = nodeRightBefore.next;
      nodeRightBefore.next = nodeToRemove.next;
      this.length--;
      return nodeToRemove;
    }
  }
  reverse() {
    this.tail = this.head;
    let front = this.head.next;
    let back = this.tail;
    while (front) {
      const temp = front.next;
      front.next = back;
      back = front;
      front = temp;
    }
    this.head = back;
    this.tail.next = null;
    return this;
  }
}
