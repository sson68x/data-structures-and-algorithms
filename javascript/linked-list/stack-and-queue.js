'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      console.error('Empty stack');
      return null;
    }
    let node = this.top;
    this.top = node.next;
    node.next = null
    return node.value;
  }

  peek() {
    return !this.isEmpty() ?
    this.top.value :
    console.log('Empty stack');
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
};

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.count = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.isEmpty()) {
      this.rear.next = newNode;
    }
    else {
      this.front = newNode;
    }
    this.rear = newNode;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error('Empty queue');
      return null;
    }
    const nodeToDequeue = this.front;
    this.front = this.front.next;
    if (!nodeToDequeue.next) {
      this.rear = null;
    }
    nodeToDequeue.next = null;
    this.count--;
    return nodeToDequeue.value;
  }

  peek() {
    return !this.isEmpty() ?
      this.front.value :
      console.error('Empty queue');
  }

  isEmpty() {
    return (this.front === null);
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
}
