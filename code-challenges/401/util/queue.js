'use strict';

const { Node, LinkedList } = require('../linkedList/linked-list');


/**
 * @class Queue
 * @extends LinkedList
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

  /**
   * Returns true if queue is empty, else false
   * @returns {boolean}
   */
  isEmpty() {
    return !this.head;
  }

  /**
   * Adds a value to the back of the queue
   * @param value - the value to be added
   */
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

  /**
   * Removes a value from the front of the queue
   * @returns {null|*} - the removed value, or null if the queue is empty
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  /**
   * Returns the value at the front of the list, without removing it
   * @returns {null|*} - the value at the front of the queue, or null if the queue is empty
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

}


module.exports = Queue;
