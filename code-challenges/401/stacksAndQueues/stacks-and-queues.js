'use strict';


class Node {

  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }

}


// TODO - Stack Documentation
// TODO - check/handle errors
class Stack {

  constructor() {
    this.top = null;
  }

  isEmpty() {
    return !this.top;
  }

  push(value) {
    // TODO - add a new node with `value` to the top of the stack
  }

  pop() {
    // TODO - remove the node from the top of the stack, and return the node’s value
  }

  peek() {
    // TODO - return the value of the node located on top of the stack, without removing it from the stack
  }

}


// TODO - Stack Documentation
// TODO - check/handle errors
class Queue {

  constructor() {
    this.front = null;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(value) {
    // TODO - add a new node with `value` to the back of the queue
  }

  dequeue() {
    // TODO - remove the node from the front of the queue, and return the node’s value
  }

  peek() {
    // TODO - return the value of the node located in the front of the queue, without removing it from the queue
  }

}


module.exports = {Node, Stack, Queue};
