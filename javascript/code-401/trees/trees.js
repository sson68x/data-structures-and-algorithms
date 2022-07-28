'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
    // this.children = new Array(k).fill(null);  // see MDN, not required
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];

    //  recursive helper function
    const traverse = (node) => {
      // base case aka the thing I want to do
      results.push(node.value);

      // need my recursive case(s)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    // start the recursive "party"
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  treeMaxValue() {
    if (this.root === null) {
      return null;
    } else {
      let maxValue = this.root.value;
      let currentNode = this.root;
      const traverse = node => {
        if (node.value > maxValue) {
          maxValue = node.value;
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      };
      traverse(currentNode);
      return maxValue;
    }
  }


};

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  };

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    };

    let search = (node) => {
      if (node.value === value) {
        console.error('Cannot add: value already exists in the tree');
      }
      if (value < node.value) {
        if (node.left) { search(node.left); }
        else { node.left = new Node(value); }
      }
      if (value > node.value) {
        if (node.right) { search(node.right); }
        else { node.right = new Node(value); }
      }
    };

    search(this.root);
  };

  contains(value) {
    if (!this.root) {
      console.error('The tree is empty!');
      return;
    };

    let result = false;

    let search = (node) => {
      if (value === node.value) {
        result = true;
      }
      if (value < node.value) {
        if (node.left) { search(node.left); }
      }
      if (value > node.value) {
        if (node.right) { search(node.right); }
      }
    };

    search(this.root);
    return result;
  };
};


let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();
let treeMax = tree.treeMaxValue();

console.log('preOrder:', preOrder);
console.log('inOrder:', inOrder);
console.log('postOrder:', postOrder);
console.log('treeMax:', treeMax);
console.log('breadthFirst:', breadthFirst);

let binarySearchTree = new BinarySearchTree();
binarySearchTree.root = new Node(10);
let add = binarySearchTree.add(1);
let contains = binarySearchTree.contains(1);

console.log('add:', add);
console.log('contains:', contains);

module.exports = {
  BinaryTree,
  Node,
  BinarySearchTree
};
