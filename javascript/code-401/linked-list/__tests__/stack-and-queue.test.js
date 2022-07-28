'use strict';

const { Stack, Queue, Node } = require('../stack-and-queue');

describe('Stack test', () => {

  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(3);

    expect(stack.top.value).toEqual(3);
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.top.value).toEqual(5);
    expect(stack.top.next.value).toEqual(4);
    expect(stack.top.next.next.value).toEqual(3);
  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.pop();

    expect(stack.top).toBeNull();

  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(6);
    stack.push(7);
    stack.push(8);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.next).toBeUndefined();
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.isEmpty();

    this.isNot;
  });

  test('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.peek();

    expect(stack.top.value).toEqual(5);
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.peek();

    expect(stack.top).toBeNull;
  });
});

let queue = new Queue();

describe('Queue Tests', () => {
  test('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();

    expect(newQueue.count).toEqual(0);
    expect(newQueue.front).toEqual(null);
  });

  test('Can successfully enqueue into a queue', () => {
    queue.enqueue('1st');

    expect(queue.front.value).toEqual('1st');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('2nd');
    queue.enqueue('3rd');
    queue.enqueue('4th');

    expect(queue.front.value).toEqual('1st');
    expect(queue.front.next.value).toEqual('2nd');
    expect(queue.rear.value).toEqual('4th');
    expect(queue.count).toEqual(4);
  });

  test('Can successfully dequeue ot of a queue', () => {
    let dequeuedValue = queue.dequeue();

    expect(dequeuedValue).toEqual('1st');
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let dequeued2nd = queue.dequeue();
    let dequeued3rd = queue.dequeue();
    let dequeued4th = queue.dequeue();

    expect(dequeued2nd).toEqual('2nd');
    expect(dequeued3rd).toEqual('3rd');
    expect(dequeued4th).toEqual('4th');
    expect(queue.count).toEqual(0);
  });

  test('Can successfully peek', () => {
    queue.enqueue('peek');

    expect(queue.peek()).toEqual('peek');
  });
});
