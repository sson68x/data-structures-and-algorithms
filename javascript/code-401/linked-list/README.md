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

## Code Challenge 06 : Append, Insert Before and Insert After

- Append
  - arguments: new value
  - adds a new node with the given value to the end of the list
- Insert before
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified
- Insert after
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified

## Code Challenge 10 : Stack and a Queue Implementation

- Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

## Code Challenge 11 : Stack/Queue - Pseudo

- Create a new class called pseudo queue.
  - Do not use an existing Queue.
  - Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
  - Internally, utilize 2 Stack instances to create and manage the queue
Methods:
  - enqueue
    - Arguments: value
    - Inserts value into the PseudoQueue, using a first-in, first-out approach.
  - dequeue
    - Arguments: none
    - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Code Challenge 13 : Validate Brackets

- Write a function called validate brackets
- Arguments: string
- Return: boolean
  - representing whether or not the brackets in the string are balanced

## Approach & Efficiency

### CC5

- Reviewed the lecture and testing via console.logs.
- Space/time complexity: O(1)

### CC10

- Reviewed the lecture and testing via console.logs.
- Space/time complexity: O(1)

### CC11

- Reviewed the class demo, tested in the terminal.
- Space/time complexity: O(1)

### CC13

- Reviewed the in-class whiteboard demo.
- Space complexity: O(n)
- Time complexity: O(1)

## API

- CC5: `insert`, `includes`, and `toString` methods used.
- CC10, CC11: `push`, `pop`, `enqueue`, `dequeue`, `peek`, and `isEmpty` used.
