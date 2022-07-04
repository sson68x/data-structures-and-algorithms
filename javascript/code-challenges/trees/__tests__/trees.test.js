'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../trees');

describe('Tests for Trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();

    expect(tree).toEqual({ 'root': null });

  });

  test('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);

    expect(tree).toEqual({ 'root': { 'left': null, 'right': null, 'value': 10 } });

  });

  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(20);
    let preOrder = tree.preOrder();

    expect(preOrder).toEqual([10, 5, 1, 8, 15, 20]);
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(1);
    binarySearchTree.add(5);

    expect(binarySearchTree).toEqual({"root": {"left": null, "right": {"left": null, "right": null, "value": 5}, "value": 1}});
  });

  test('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(20);
    let preOrder = tree.preOrder();

    expect(preOrder).toEqual([10, 5, 1, 8, 15, 20]);
  });

  test('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(20);
    let inOrder = tree.inOrder();

    expect(inOrder).toEqual([1, 5, 8, 10, 15, 20]);
  });


  test('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(20);
    let postOrder = tree.postOrder();

    expect(postOrder).toEqual([1, 8, 5, 20, 15, 10]);
  });

  test('Returns true or	false for the contains method, given an existing or non-existing node value', () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.root = new Node(1);
    let contains = binarySearchTree.contains(1);

    expect(contains).toByTruthy;
  });
});
