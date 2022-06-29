# Singly Linked List

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Code Challenge 05 : Implementation

- Create a Linked List class
- Within your Linked List class, include a head property.
  - Upon instantiation, an empty Linked List should be created.
- The class should contain the following methods
  - insert
    - Arguments: value
    - Returns: nothing
    - Adds a new node with that value to the head of the list with an O(1) Time performance.
- includes
  - Arguments: value
  - Returns: Boolean
    - Indicates whether that value exists as a Node’s value somewhere within the list.
- to string
  - Arguments: none
  - Returns: a string representing all the values in the Linked List, formatted as:
    - "{ a } -> { b } -> { c } -> NULL"

## Code Challenge 10 : Stack and a Queue Implementation

- Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

## Approach & Efficiency

- Reviewed the lecture and testing via console.logs.
- Space/time complexity: O(1)

## API

- CC5: `insert`, `includes`, and `toString` methods used.
- CC10: `push`, `pop`, `enqueue`, `dequeue`, `peek`, and `isEmpty` used.
