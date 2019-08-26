'use strict';

const { Node, LinkedList } = require('../linkedList/linked-list');


// TODO - Stack Documentation
class Stack extends LinkedList {

  constructor() {
    super();
  }

  isEmpty() {
    return !this.head;
  }

  push(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

}


// TODO - Queue Documentation
/**
 * @class Queue
 *
 * The specification asks for a `front` property, and a O(1) enqueue method.
 * For a singly linked list, a `front` reference would lead to a O(1) dequeue
 * and peak, but a O(n) enqueue, since new nodes logically start in the back.
 *
 * I have opted to implement Queue with this in mind, where `front` is `head`.
 */
class Queue extends LinkedList {

  constructor() {
    super();
  }

  isEmpty() {
    return !this.head;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

}


module.exports = {Node, Stack, Queue};
