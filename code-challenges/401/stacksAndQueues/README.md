# Stacks and Queues
This module implements Stack and Queue using a Linked List.

## Challenge
- Create a `Stack` class with methods `push`, `pop`, and `peek`
  - the class should be aware of its empty state
- Create a `Queue` class with methods `enqueue`, `dequeue`, and `peek`
  - the class should be aware of its empty state

## Approach & Efficiency
All data structure manipulations involved traversing the linked list and/or reassigning node references.

Since the `top` node of a `Stack` is always accessible, `push`, `pop`, and `peek` have O(1) time complexity. For a `Queue`, the `front` is always accessible, making `peek` and `dequeue` O(1) time, but `dequeue` must traverse the list, making it O(n).

`isEmpty` checks with each ADT are O(1) time. All methods take O(1) space.

## API
### Stack
#### `isEmpty() -> boolean`
Returns `true` if the stack is empty, else `false`
#### `push(value)`
Adds a new node with the `value` to the top of the stack 
#### `pop() -> any`
Removes the node from the top of the stack, and returns the node's value
#### `peek() -> any`
Returns the value of the node located on top of the stack, without removing it from the stack

### Queue
#### `isEmpty() -> boolean`
Returns `true` if the stack is empty, else `false`
#### `enqueue(value)`
Adds a new node with the `value` to the back of the queue 
#### `dequeue() -> any`
Removes the node from the front of the queue, and returns the node's value
#### `peek() -> any`
Returns the value of the node located in the front of the queue, without removing it from the queue
