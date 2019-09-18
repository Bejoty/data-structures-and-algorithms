'use strict';

const BinaryTreeFMV = require('../find-maximum-value');

describe(`#findMaximumValue`, () => {

  test(`Passes example case from the challenge specification`, () => {
    const binaryTree = new BinaryTreeFMV([2, 7, 5, 2, 6, 9, 5, 11, 4]);
    expect(binaryTree.findMaximumValue()).toEqual(11);
  });

  test(`An empty tree (null root) returns null`, () => {
    const binaryTree = new BinaryTreeFMV();
    expect(binaryTree.findMaximumValue()).toBeNull();
  });

  test(`A tree with only a root node returns that node's value`, () => {
    const binaryTree = new BinaryTreeFMV([42]);
    expect(binaryTree.findMaximumValue()).toEqual(42);
  });

});
