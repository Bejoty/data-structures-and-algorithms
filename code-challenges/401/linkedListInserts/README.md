# Linked List Inserts
Implementation of a Linked List's methods: `append()`, `insertBefore()`, and `insertAfter()`.

## Challenge Description
Write the following methods for the Linked List class:

- `.append(value)` which adds a new node with the given `value` to the end of the list - USING RECURSION
- `.insertBefore(value, newVal)` which add a new node with the given `newValue` immediately before the first `value` node
- `.insertAfter(value, newVal)` which add a new node with the given `newValue` immediately after the first `value` node


## Approach & Efficiency
#### `append()`
If the linked list is empty, the value can simply be placed in a head node. Otherwise, a recursive function is called, successively calling itself with each node until `current.next` is null. At this base case, the new `Node` is placed at `current.next`. This algorithm has O(n) time and memory complexity.

#### `insertBefore()`
If the head node exists, it must be checked first for the target value, since this special case requires a reassignment of `this.head`. Otherwise, `current` references `this.head`, traversing the list until `current.next.value` equals `value`. At this point, the new `Node`'s next node becomes `current.next`, and `current.next` is set to to the new node.

#### `insertAfter()`
If the head node exists, `current` references `this.head`. Traversing the list, if `current.value` equals `value`, the new `Node`'s next node becomes `current.next`, and `current.next` is set to the node. This algorithm has O(n) time complexity.

## Solution
![](assets/whiteboard-06.jpg)
