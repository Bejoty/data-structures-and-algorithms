'use strict';

const findUnionAndIntersection = (rootA, rootB) => {
  const setA = new Set();
  const setB = new Set();
  getValueSet(rootA, setA);
  getValueSet(rootB, setB);

  const union = Array.from(setA);
  const intersection = [];

  for (let value of setB) {
    union.push(value);

    if (setA.has(value)) {
      intersection.push(value);
    }
  }

  return {union, intersection};
};

const getValueSet = (node, set) => {
  if (node) {
    set.add(node.value);
    getValueSet(node.left, set);
    getValueSet(node.right, set);
  }
};

module.exports = findUnionAndIntersection;
