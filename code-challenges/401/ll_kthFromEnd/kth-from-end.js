'use strict';

const { LinkedList } = require('../linkedList/linked-list');

class LinkedListKth extends LinkedList {

  /**
   * Returns the value of the Node `k` from the last node in the list.
   *
   * @param {number} k - The number of nodes from the end of the list
   * @returns {null|number} The value of the node
   */
  kthFromEnd(k) {
    if (!this.head || k < 0) {
      return null;
    }

    let lead = this.head;
    for (let i = 0; i < k; i++) {
      if (!lead.next) {
        return null;
      }
      lead = lead.next;
    }

    let target = this.head;
    while (lead.next) {
      lead = lead.next;
      target = target.next;
    }

    return target.value;
  }
}

module.exports = LinkedListKth;
