'use strict';

const { LinkedList } = require('../linkedList/linked-list');

const mergeLinkedLists = (list1, list2) => {
    if (!list1 || !list1.head) {
        return list2;
    }

    let current = list1.head;
    let toInsert = list2.head;

    while (current.next && toInsert) {
        let nextInsert = toInsert.next;
        toInsert.next = current.next;
        current.next = toInsert;
        current = current.next.next;
        toInsert = nextInsert;
    }

    while (current.next) {
        current = current.next;
    }

    current.next = toInsert;

    return list1.head;
};

module.exports = mergeLinkedLists;
