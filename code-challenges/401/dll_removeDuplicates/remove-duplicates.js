'use strict';

/**
 * Removes duplicated values from a doubly-linked list.
 * @param list - A doubly-linked list
 */
const removeDuplicates = list => {
  if (!list || !list.head || !list.head.next) {
    return;
  }

  const set = new Set();
  set.add(list.head.value);

  let current = list.head;
  while (current && current.next) {
    if (!set.has(current.next.value)) {
      set.add(current.next.value);
      current = current.next;
    } else {
      // Remove current.next
      if (current.next.next) {
        current.next.next.previous = current;
      }
      current.next = current.next.next;
    }
  }
};

module.exports = removeDuplicates;
