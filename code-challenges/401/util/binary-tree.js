'use strict';

const {Queue} = require('../stacksAndQueues/stacks-and-queues');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/** Class representing a binary tree. */
class BinaryTree {
  /**
   * Converts an array of values into a binary tree, constructing the tree
   * by filling each level from "left" to "right."
   *
   * @param {Array} array - An array of elements (optional)
   */
  constructor(array) {
    if (!Array.isArray(array) || array.length === 0 || array[0] === null) {
      this.root = null;
      return;
    }

    this.root = new Node(array[0]);

    const queue = new Queue();
    let current = this.root;
    let index = 1;
    for (let i = 1; i < array.length; i++) {
      const value = array[i];
      if (!value) continue;

      const node = new Node(value);
      queue.enqueue(node);

      if (!current.left) {
        current.left = node;
      } else if (!current.right) {
        current.right = node;
      } else {
        current = queue.dequeue();
        current.left = node;
      }
    }
  }

  /**
   * TODO - Refactor any code using this function to call the constructor instead
   * Builds a binary tree from an array
   *
   * @param {Array} array - An array representation of a binary tree
   * @return {BinaryTree} The binary tree
   */
  static fromArray(array) {
    if (!array || array.length === 0) return new BinaryTree();

    const root = new Node(array[0]);

    const queue = new Queue();
    let current = root;
    let index = 1;
    for (let i = 1; i < array.length; i++) {
      const node = new Node(array[i]);
      queue.enqueue(node);

      if (!current.left) {
        current.left = node;
      } else if (!current.right) {
        current.right = node;
      } else {
        current = queue.dequeue();
        current.left = node;
      }
    }

    return new BinaryTree(root);
  }

}

module.exports = BinaryTree;