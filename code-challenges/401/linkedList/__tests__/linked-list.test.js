'use strict';

const {LinkedList} = require('../linked-list');

let linkedList;
beforeEach(() => linkedList = new LinkedList());

describe('linked-list', () => {
  test('can instantiate an empty linked list', () => {
    expect(linkedList.hasOwnProperty('head')).toBeTruthy();
    expect(linkedList.head).toBeNull();
    expect(linkedList.toString()).toEqual('[]');
  });

  test('can insert a node into a linked list', () => {
    const testValue = 1;
    linkedList.insert(testValue);

    expect(linkedList.head.value).toEqual(testValue);
    expect(linkedList.toString()).toEqual(`[${testValue}]`);
  });

  test('create a simple linked list with three nodes', () => {
    const first = 1;
    const second = 2;
    const third = 3;

    linkedList.insert(first);
    linkedList.insert(second);
    linkedList.insert(third);

    expect(linkedList.head.value).toEqual(third);
    expect(linkedList.toString()).toEqual(`[${third}, ${second}, ${first}]`);
  });

  test('list includes() a given value after insertion', () => {
    const first = 1;
    const second = 2;

    linkedList.insert(first);
    expect(linkedList.includes(first)).toEqual(true);

    linkedList.insert(second);
    expect(linkedList.includes(first)).toEqual(true);
    expect(linkedList.includes(second)).toEqual(true);
  });

  test('list does not include non-inserted value', () => {
    const inserted = 1;
    const notInserted = 2;

    linkedList.insert(inserted);
    expect(linkedList.includes(notInserted)).toEqual(false);
  });
});
