'use strict';

const {Queue, Stack} = require('../stacksAndQueues/stacks-and-queues.js');

const findLeavesBFS = root => {
  if (!root) return [];

  const leaves = [];
  const queue = new Queue();

  queue.enqueue(root);
  while(!queue.isEmpty()) {
    const node = queue.dequeue();
    const left = node.left;
    const right = node.right;

    if (!left && !right) {
      leaves.push(node.value);
    }

    if (left) {
      queue.enqueue(left);
    }

    if (right) {
      queue.enqueue(right);
    }
  }
  return leaves;
};

const findLeavesDFS = root => {
  if (!root) return [];

  const leaves = [];
  const stack = new Stack();

  stack.push(root);
  while(!stack.isEmpty()) {
    const node = stack.pop();
    const left = node.left;
    const right = node.right;

    if (!left && !right) {
      leaves.push(node.value);
    }

    if (left) {
      stack.push(left);
    }

    if (right) {
      stack.push(right);
    }
  }
  return leaves;
};

module.exports = {findLeavesBFS, findLeavesDFS};
