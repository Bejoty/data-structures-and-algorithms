'use strict';

const { LinkedList } = require('../linkedList/linked-list');

class LinkedListReverse extends LinkedList {

  reverse() {
    if (this.head && this.head.next) {
      this.head = this.reverseRecursive(this.head, this.head.next);
    }
  }

  reverseRecursive(previous, current) {
    let newHead;
    if (current.next) {
      newHead = this.reverseRecursive(current, current.next);
    } else {
      newHead = current;
    }
    current.next = previous;
    previous.next = null;
    return newHead;
  }

}

module.exports = LinkedListReverse;
