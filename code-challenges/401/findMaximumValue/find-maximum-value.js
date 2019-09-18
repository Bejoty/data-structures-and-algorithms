'use strict';

const {Stack} = require('../stacksAndQueues/stacks-and-queues');
const BinaryTree = require('../util/binary-tree');

class BinaryTreeFMV extends BinaryTree {

  constructor(array) {
    super(array);
  }

  findMaximumValue() {
    if (!this.root) {
      return null;
    }

    let maxValue = this.root.value;

    const stack = new Stack();
    stack.push(this.root);

    while (!stack.isEmpty()) {
      const current = stack.pop();

      if (current.value > maxValue) {
        maxValue = current.value;
      }

      if (current.left) {
        stack.push(current.left);
      }

      if (current.right) {
        stack.push(current.right);
      }
    }

    return maxValue;
  }
}

module.exports = BinaryTreeFMV;
