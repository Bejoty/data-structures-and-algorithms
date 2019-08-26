'use strict';

const LinkedList = require('../reverse');

let linkedList;

beforeEach(() => {
  linkedList = new LinkedList();
});

describe('reverse', () => {

  test('normal cases', () => {
    // Single element list
    linkedList.insert(3);
    linkedList.reverse();
    expect(linkedList.toString()).toEqual('[3]');

    linkedList.insert(2);
    linkedList.insert(1);
    // [1, 2, 3]
    linkedList.reverse();
    expect(linkedList.toString()).toEqual('[3, 2, 1]');
  });

  test('empty list', () => {
    linkedList.reverse();
    expect(linkedList.toString()).toEqual('[]');
  });

});
