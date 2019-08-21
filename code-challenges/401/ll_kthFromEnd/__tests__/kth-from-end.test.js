'use strict';

const LinkedList = require('../kth-from-end');

let linkedList;

beforeEach(() => {
  linkedList = new LinkedList();
});

describe('kth-from-end', () => {

  test('normal case', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    // [1, 2, 3]
    expect(linkedList.kthFromEnd(0)).toEqual(3);
    expect(linkedList.kthFromEnd(1)).toEqual(2);
    expect(linkedList.kthFromEnd(2)).toEqual(1);
  });

  test('empty list', () => {
    expect(linkedList.kthFromEnd(1)).toBeNull();
  });

  test('k must be less than list length', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.kthFromEnd(3)).toBeNull()
  });

});
