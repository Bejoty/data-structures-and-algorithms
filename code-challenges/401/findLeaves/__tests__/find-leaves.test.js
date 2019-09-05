'use strict';

const BinaryTree = require('../../util/binary-tree.js');
const { findLeavesBFS, findLeavesDFS } = require('../find-leaves.js');

describe('find-leaves', () => {
  const bt = BinaryTree.fromArray([4, 1, 3, 6, 2]);

  test('build function works right', () => {
    expect(bt.root.value).toEqual(4);
    expect(bt.root.left.value).toEqual(1);
    expect(bt.root.right.value).toEqual(3);
    expect(bt.root.left.left.value).toEqual(6);
    expect(bt.root.left.right.value).toEqual(2);
  });

  test('BFS correctly returns an array of leaf nodes', () => {
    expect(findLeavesBFS(bt.root)).toEqual([3, 6, 2]);
  })

  test('DFS correctly returns an array of leaf nodes', () => {
    expect(findLeavesDFS(bt.root)).toEqual([3, 2, 6]);
  })

  test('empty tree should return empty array', () => {
    expect(findLeavesBFS(null)).toEqual([]);
    expect(findLeavesDFS(null)).toEqual([]);
  })

  test('tree of height 0 should return an array with only the root value', () => {
    expect(findLeavesBFS(BinaryTree.fromArray([5]).root)).toEqual([5]);
    expect(findLeavesDFS(BinaryTree.fromArray([5]).root)).toEqual([5]);
  })

});
