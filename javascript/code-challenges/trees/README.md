# Trees

## Binary Tree

* Define a method for each of the depth first traversals:
  * pre order
  * in order
  * post order which returns an array of the values, ordered appropriately.

## Binary Search Tree

* This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
* Add
  * Arguments: value
  * Return: nothing
  * Adds a new node with that value in the correct location in the binary search tree.
* Contains
  * Argument: value
  * Returns: boolean indicating whether or not the value is in the tree at least once.

## Challenge

Write tests to prove the following functionality:

* Can successfully instantiate an empty tree
* Can successfully instantiate a tree with a single root node
* For a Binary Search Tree, can successfully add a left child and right child properly to a node
* Can successfully return a collection from a preorder traversal
* Can successfully return a collection from an inorder traversal
* Can successfully return a collection from a postorder traversal

## Approach & Efficiency

* Reviewed in-class demo
* Big O space: O(log n)
* Big O time: O(log n)

## API

* `preOrder` - arguments: none, returns: an array of tree values in pre-order.
* `inOrder` - arguments: none, returns: an array of tree values in order.
* `postOrder` - arguments: none, returns: an array of tree values in post-order.
* `add` - (binary search tree only) arguments: a value to insert, returns: undefined.
* `contains` - (binary search tree only) arguments: a value to search for, returns: true if value present.
