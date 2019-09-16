'use strict';

const {Queue} = require("../stacksAndQueues/stacks-and-queues");

/**
 * Returns the path length between two nodes in a binary tree.
 *
 * @param {Node} root - The root of a binary tree
 * @param {number} parent - The value of a node that is an ancestor of child
 * @param {number} child - The value of a node that is a descendent of parent
 * @returns {number} The path length, or null if the root is null or either
 * value is not found in the tree.
 */
const findPathLength = (root, parent, child) => {
  if (!root) return null;

  // Step 1: Find parent
  const node = findTargetNode(root, parent);
  if (!node) return null;

  // Step 2: Find path to child recursively
  return findPathLengthRecursive(node, child);
};

/**
 * Searches for a node with the given value within a binary tree.
 *
 * @param {Node} root - The root of a binary tree
 * @param {number} target - The value of a node to find
 * @returns {Node} The target node, if found, otherwise null
 */
const findTargetNode = (root, target) => {
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

  return null;
};

/**
 * A recursive function that looks for a node with the target value and returns
 * the length of the path to it.
 *
 * @param {Node} current - The node currently being visited
 * @param {number} target - The value of the node to find
 * @param {number} depth - The current depth from the initial input node
 * @returns {number} The length of the path, or null if target is not found
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
