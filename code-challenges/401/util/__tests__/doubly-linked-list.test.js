'use strict';

const DoublyLinkedList = require('../doubly-linked-list');

describe('DoublyLinkedList', () => {
  test('successfully builds a linked list from an array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const list = new DoublyLinkedList(array);
    expect(list.toArray()).toEqual(array);
  });

  test('previous references are correctly set', () => {
    const list = new DoublyLinkedList([1, 2, 3]);

    const one = list.head;
    const two = one.next;
    const three = two.next;

    expect(one.previous).toBeNull();
    expect(two.previous).toEqual(one);
    expect(three.previous).toEqual(two);
  });

  test('an empty constructor sets the list head to null', () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBeNull();
  });
});
