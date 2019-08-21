'use strict';

const { LinkedList } = require('../linkedList/linked-list');

class LinkedListKth extends LinkedList {
  kthFromEnd(k) {
    if (!this.head) {
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
