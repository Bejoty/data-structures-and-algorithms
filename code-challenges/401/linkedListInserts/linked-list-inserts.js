'use strict';

const {LinkedList, Node} = require('../linkedList/linked-list');

class LinkedListInserts extends LinkedList {

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    } else {
      this.appendRecursive(value, this.head);
    }
  }

  appendRecursive(value, current) {
    if (!current.next) {
      current.next = new Node(value);
    } else {
      this.appendRecursive(value, current.next);
    }
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      const newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          const newNode = new Node(newValue);
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
      // End of linked list reached with value unseen
    }
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    // End of linked list reached with value unseen
  }

}

module.exports = LinkedListInserts;
