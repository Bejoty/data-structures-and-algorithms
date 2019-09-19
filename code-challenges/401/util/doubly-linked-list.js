'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

/**
 * A doubly linked list data structure consisting of nodes, each containing a
 * value and references to their respective previous and next nodes.
 */
class DoublyLinkedList {

  /**
   * Constructs a doubly linked list from an optional array. If no parameter is
   * passed, the list will be empty, with its head reference set to null.
   * @param array - An optional array to build the list
   */
  constructor(array=null) {
    if (!Array.isArray(array) || array.length === 0) {
      this.head = null;
      return;
    }

    this.head = new Node(array[0]);
    let current = this.head;

    for (let i = 1; i < array.length; i++) {
      const node = new Node(array[i]);

      current.next = node;
      node.previous = current;
      current = node;
    }
  }

  toArray() {
    const array = [];

    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }
}

module.exports = DoublyLinkedList;