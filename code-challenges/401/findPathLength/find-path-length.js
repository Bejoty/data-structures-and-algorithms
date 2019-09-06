'use strict';

const {Queue} = require("../stacksAndQueues/stacks-and-queues");

/**
 * TODO
 * @param root
 * @param parent
 * @param child
 * @returns {null|(null|number)}
 */
const findPathLength = (root, parent, child) => {
  if (!root) return null;

  // Step 1: Find parent
  const node = findParent(root, parent);
  if (!node) return null;

  // Step 2: Find path to child recursively
  return findPathLengthRecursive(node, child);
};

/**
 * TODO
 * @param root
 * @param target
 * @returns {*}
 */
const findParent = (root, target) => {
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node.value === target) {
      return node;
    }

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }
};

/**
 * TODO
 * @param current
 * @param target
 * @param depth
 * @returns {null|number|(null|number)}
 */
const findPathLengthRecursive = (current, target, depth=0) => {
  if (!current) return null;

  if (current.value === target) {
    return depth;
  }

  const left = findPathLengthRecursive(current.left, target, depth + 1);
  const right = findPathLengthRecursive(current.right, target, depth + 1);

  return left ? left : right;
};

module.exports = findPathLength;
