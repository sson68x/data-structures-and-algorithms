'use strict';

const { Stack } = require('./stack-and-queue');

class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = null;
    this.count = 0;
  }

  enqueue(value) {
    while (!this.outStack.isEmpty()) {
      this.inStack.push(this.outStack.pop());
    }

    this.inStack.push(value);

    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
    this.front = this.outStack.top;
    this.count = this.outStack.count;
  }

  dequeue() {
    let dequeuedValue = this.outStack.pop();
    this.front = this.outStack.top;
    this.count = this.outStack.count;
    return dequeuedValue;
  }

  peek() {
    return this.front.value;
  }
}

module.exports = PseudoQueue;
