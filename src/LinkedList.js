import Node from "./Node";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }
  // pop() {
  //   if (!this.head) return undefined;
  //   let current = this.head;
  //   while (current && current.next !== this.tail) {
  //     current = current.next;
  //   }
  //   const result = this.tail;
  //   if (current === this.head) {
  //     this.head = null;
  //     current = null;
  //   }

  //   this.tail = current;
  //   this.length--;
  //   return result;
  // }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}
