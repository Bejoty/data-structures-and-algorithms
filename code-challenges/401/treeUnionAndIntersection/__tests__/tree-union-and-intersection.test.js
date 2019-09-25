'use strict';

const BinaryTree = require('../../util/binary-tree');
const treeUnionAndIntersection = require('../tree-union-and-intersection');

describe('#treeUnionAndIntersection', () => {
  test('example (normal) case', () => {
    const treeA = new BinaryTree(
      [150, 100, 250, 75, 160, 200, 350, null, null, 125, 175, null, null, 300, 500]
    );
    const treeB = new BinaryTree(
      [42, 100, 600, 15, 160, 200, 350, null, null, 125, 175, null, null, 4, 500]
    );

    const { union, intersection } = treeUnionAndIntersection(treeA.root, treeB.root);

    const expectedUnion = new Set(
      [4, 15, 42, 75, 100, 125, 150, 160, 175, 200, 250, 300, 350, 500, 600]
    );
    const expectedIntersection = new Set(
      [100, 125, 160, 175, 200, 350, 500]
    );

    for (let i of union) {
      expect(expectedUnion.has(i)).toBeTruthy();
    }

    for (let i of intersection) {
      expect(expectedIntersection.has(i)).toBeTruthy();
    }
  });

  test('empty trees behave correctly', () => {
    const treeA = new BinaryTree();
    const valuesB = [2, 4, 6, 8];
    const treeB = new BinaryTree(valuesB);

    const { union, intersection } = treeUnionAndIntersection(treeA.root, treeB.root);

    const expectedUnion = new Set(valuesB);

    for (let i of union) {
      expect(expectedUnion.has(i)).toBeTruthy();
    }

    expect(intersection).toEqual([]);

    const result = treeUnionAndIntersection(treeA.root, treeA.root);
    expect(result.union).toEqual([]);
    expect(result.intersection).toEqual([]);
  });
});
