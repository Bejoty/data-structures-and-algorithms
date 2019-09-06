'use strict';

const BinaryTree = require('../../util/binary-tree.js');
const findPathLength = require('../find-path-length');

describe('findPathLength', () => {
  const tree = BinaryTree.fromArray([10, 2, 6, 5, 7, 9, 8, 3, 1, 11, 4]);

  it('finds the correct path for expected cases', () => {
    expect(findPathLength(tree.root, 10, 10)).toEqual(0);
    expect(findPathLength(tree.root, 10, 2)).toEqual(1);
    expect(findPathLength(tree.root, 10, 6)).toEqual(1);
    expect(findPathLength(tree.root, 10, 5)).toEqual(2);
    expect(findPathLength(tree.root, 10, 8)).toEqual(2);
    expect(findPathLength(tree.root, 10, 3)).toEqual(3);
  });

  it('returns null if root is null', () => {
    expect(findPathLength(null, 10, 2)).toBeNull();
  });

  it('returns null if parent value not found', () => {
    expect(findPathLength(tree.root, 99, 2)).toBeNull();
  });

  it('returns null if child value not found', () => {
    expect(findPathLength(tree.root, 10, 99)).toBeNull();
  });

  it('returns null if child is not descendent of parent', () => {
    expect(findPathLength(tree.root, 2, 6)).toBeNull();
  });


});
