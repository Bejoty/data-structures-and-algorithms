'use strict';

/**
 * Returns the union and intersection of two binary trees.
 * @param rootA - The first tree's root
 * @param rootB - The second tree's root
 * @returns {{intersection: array, union: array}}
 */
const findUnionAndIntersection = (rootA, rootB) => {
  const setA = new Set();
  const setB = new Set();
  getValueSet(rootA, setA);
  getValueSet(rootB, setB);

  const union = Array.from(setA);
  const intersection = [];

  for (let value of setB) {
    if (setA.has(value)) {
      intersection.push(value);
    } else {
      union.push(value);
    }
  }

  return {union, intersection};
};

/**
 * Helper recursive function that traverses a binary tree, adding each value to a set.
 * @param node - The local root
 * @param set - A set to record the tree's values
 */
const getValueSet = (node, set) => {
  if (node) {
    set.add(node.value);
    getValueSet(node.left, set);
    getValueSet(node.right, set);
  }
};

module.exports = findUnionAndIntersection;
