'use strict';

const { LinkedList } = require('../../linkedList/linked-list');
const mergeLinkedLists = require('../ll-merge');

let list1, list2;

beforeEach(() => {
    list1 = new LinkedList();
    list2 = new LinkedList();
});

describe('#mergeLinkedLists', () => {

    it('can successfully merge two equal lists of one node each', () => {
        list1.insert(1);
        list2.insert(2);

        expect(mergeLinkedLists(list1, list2).toString()).toEqual('[1, 2]');
    });

    it('can successfully merge two equal multi-node lists', () => {
        list1.insert(3);
        list1.insert(2);
        list1.insert(1); // [1, 2, 3]
        list2.insert(6);
        list2.insert(5);
        list2.insert(4); // [4, 5, 6]

        expect(mergeLinkedLists(list1, list2).toString()).toEqual('[1, 4, 2, 5, 3, 6]');
    });

    it('can successfully merge two lists when the first list is longer', () => {
        list1.insert(3);
        list1.insert(2);
        list1.insert(1); // [1, 2, 3]
        list2.insert(4);

        expect(mergeLinkedLists(list1, list2).toString()).toEqual('[1, 4, 2, 3]');
    });

    it('can successfully merge two lists when the second list is longer', () => {
        list1.insert(1);
        list2.insert(6);
        list2.insert(5);
        list2.insert(4); // [4, 5, 6]

        expect(mergeLinkedLists(list1, list2).toString()).toEqual('[1, 4, 5, 6]');
    });

    it('returns the first list when the second list is empty', () => {
        list1.insert(3);
        list1.insert(2);
        list1.insert(1); // [1, 2, 3]

        expect(mergeLinkedLists(list1, list2).toString()).toEqual(list1.toString());
    });

    it('returns the second list when the first list is empty', () => {
        list2.insert(6);
        list2.insert(5);
        list2.insert(4); // [4, 5, 6]

        expect(mergeLinkedLists(list1, list2).toString()).toEqual(list2.toString());
    });

    it('returns an empty list when both lists are empty', () => {
        expect(mergeLinkedLists(list1, list2).toString()).toEqual('[]');
    });

});
