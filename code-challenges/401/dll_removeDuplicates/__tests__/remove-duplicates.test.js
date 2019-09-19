'use strict';

const DoublyLinkedList = require('../../util/doubly-linked-list');
const removeDuplicates = require('../remove-duplicates');

describe('#removeDuplicates', () => {

  test('removes a duplicate value from the middle of a list', () => {
    const list = new DoublyLinkedList([1, 1, 2]);
    removeDuplicates(list);
    expect(list.toArray()).toEqual([1, 2]);
  });

  test('removes a duplicate value from the end of a list', () => {
    const list = new DoublyLinkedList([1, 2, 2]);
    removeDuplicates(list);
    expect(list.toArray()).toEqual([1, 2]);
  });

  test('removes all duplicate values from a list', () => {
    const list = new DoublyLinkedList([1, 1, 2, 3, 3, 1, 2]);
    removeDuplicates(list);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('does not modify an empty list', () => {
    const list = new DoublyLinkedList([]);
    removeDuplicates(list);
    expect(list.toArray()).toEqual([]);
  });

  test('does not modify a single-node list', () => {
    const list = new DoublyLinkedList([1]);
    removeDuplicates(list);
    expect(list.toArray()).toEqual([1]);
  });

});
