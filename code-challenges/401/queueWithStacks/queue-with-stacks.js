'use strict';

const {Stack} = require("../stacksAndQueues/stacks-and-queues");

/**
 * A queue, implemented using two stacks.
 * @class PseudoQueue
 */
class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  /**
   * Adds a value to the back of the queue.
   * @param value - The value to add
   */
  enqueue(value) {
    this.inStack.push(value);
  }

  /**
   * Removes the value at the front of the queue.
   * @returns {*} The value, or null if the queue is empty
   */
  dequeue() {
    if (this.outStack.isEmpty()) {
      while(!this.inStack.isEmpty()) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }
}

module.exports = PseudoQueue;