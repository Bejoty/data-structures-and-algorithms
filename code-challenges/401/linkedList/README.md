# Singly Linked List
Implementation of a Linked List with `insert()`, `includes()`, and `toString()`
methods.

## Challenge
- Create a `Node` class with `value` and `next` fields
- Create a `LinkedList` class with one property, `head`
- Define a method `insert()` which takes a value and adds a `Node` with that
value to the `head` of the list in O(n) time
- Define a method `includes()` which takes a value and returns a boolean result
depending on if the value exists in the list
- Define a method `toString()` which returns a string representation of the
Linked List and its values
- Test the following functionality:
  - Can successfully instantiate an empty linked list
  - Can properly insert into the linked list
  - The head property will properly point to the first node in the linked list
  - Can properly insert multiple nodes into the linked list
  - Will return true when finding a value within the linked list that exists
  - Will return false when searching for a value in the linked list that does not exist
  - Can properly return a collection of all the values that exist in the linked list

## Approach & Efficiency
#### `insert()`
Create a `Node` using the given `value`, and point its `next` property to the
list's `head`. Then, point `head` to the newly created `Node`.
- Time Efficiency: O(1)
#### `includes()`
Using a `Node` pointer, loop through the linked list using each `Node`'s `next`
property, testing each `value` with the given argument.
- Time Efficiency: O(n)
#### `toString()`
Using a `Node` pointer, loop through the linked list using each `Node`'s `next`
property, adding its `value` to an Array. Then, join the `array` in a template
string.
- Time Efficiency: O(n)

## API
#### `insert(value) -> undefined`
Adds value to the front of the list
#### `includes(value) -> boolean`
Returns true if the value exists in the list
#### `toString() -> String`
Returns a string representing all the values in the list
