'use strict';

const LinkedList = require('../linked-list-inserts');

let linkedList;
beforeEach(() => linkedList = new LinkedList());

describe('linked-list-inserts', () => {
  const first = 1;
  const second = 2;
  const third = 3;
  const newVal = 5;

  it('can add nodes to the end of the linked list', () => {
    linkedList.append(first);
    linkedList.append(second);
    linkedList.append(third);
    expect(linkedList.toString()).toEqual(`[${first}, ${second}, ${third}]`);
  });

  it('can insert a node before a node located in the middle of a linked list', () => {
    linkedList.append(first);
    linkedList.append(second);
    linkedList.append(third);
    linkedList.insertBefore(second, newVal);
    expect(linkedList.toString()).toEqual(`[${first}, ${newVal}, ${second}, ${third}]`);
  });

  it('can insert a node before the first node of a linked list', () => {
    linkedList.append(first);
    linkedList.append(second);
    linkedList.insertBefore(first, newVal);
    expect(linkedList.toString()).toEqual(`[${newVal}, ${first}, ${second}]`);
  });

  it('can insert after a node in the middle of the linked list', () => {
    linkedList.append(first);
    linkedList.append(second);
    linkedList.append(third);
    linkedList.insertAfter(second, newVal);
    expect(linkedList.toString()).toEqual(`[${first}, ${second}, ${newVal}, ${third}]`);
  });

  it('can insert a node after the last node of the linked list', () => {
    linkedList.append(first);
    linkedList.append(second);
    linkedList.insertAfter(second, newVal);
    expect(linkedList.toString()).toEqual(`[${first}, ${second}, ${newVal}]`);
  });
});
