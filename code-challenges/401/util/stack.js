'use strict';

const { Node, LinkedList } = require('../linkedList/linked-list');


/**
 * @class Stack
 * @extends LinkedList
 */
class Stack extends LinkedList {

  constructor() {
    super();
  }

  /**
   * Returns true if stack is empty, else false
   * @returns {boolean}
   */
  isEmpty() {
    return !this.head;
  }

  /**
   * Pushes the given value onto the stack
   * @param value
   */
  push(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }

  /**
   * Pops the top value off of the stack
   * @returns {null|*} - the popped value, or null if stack is empty
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  /**
   * Returns the top value of the stack, without removing it
   * @returns {null|*} - the top value, or null if stack is empty
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

}


module.exports = Stack;
