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
   * Create a an empty binary tree with a null root.
   *
   * @param {Node} root - The root node (optional)
   */
  constructor(root=null) {
   this.root = root;
  }

  /**
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