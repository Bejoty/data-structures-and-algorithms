'use strict';

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    return `[${list.join(', ')}]`;
  }
}

module.exports = {LinkedList, Node};
