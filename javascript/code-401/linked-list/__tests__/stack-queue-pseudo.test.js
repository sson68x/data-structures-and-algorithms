'use strict';

const PseudoQueue = require('../stack-queue-pseudo');

let pseudoQueue = new PseudoQueue();

describe('Queue Tests', () => {
  test('Happy Path - successfully instantiate an empty pseudo-queue', () => {
    let newPseudoQueue = new PseudoQueue();

    expect(newPseudoQueue.count).toEqual(0);
    expect(newPseudoQueue.front).toEqual(null);
  });

  test('Happy Path - successfully enqueue into a pseudo-queue', () => {
    pseudoQueue.enqueue('1st');

    expect(pseudoQueue.front.value).toEqual('1st');
  });

  test('Happy Path - successfully enqueue multiple values into a pseudo-queue', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue('2nd');
    pseudoQueue.enqueue('3rd');
    pseudoQueue.enqueue('4th');

    expect(pseudoQueue.front.value).toEqual('2nd');
    expect(pseudoQueue.front.next.value).toEqual('3rd');
  });

  test('Happy Path - successfully dequeue ot of a queue', () => {
    let dequeuedValue = pseudoQueue.dequeue();

    expect(dequeuedValue).toEqual('1st');
  });

  test('Happy Path - successfully empty a queue after multiple dequeues', () => {
    let pseudoQueue = new PseudoQueue();
    let dequeued2nd = pseudoQueue.dequeue();
    let dequeued3rd = pseudoQueue.dequeue();
    let dequeued4th = pseudoQueue.dequeue();

    expect(dequeued2nd).toEqual('2nd');
    expect(dequeued3rd).toEqual('3rd');
    expect(dequeued4th).toEqual('4th');
    expect(pseudoQueue.count).toEqual(0);
  });

  test('Happy Path - successfully peek', () => {
    pseudoQueue.enqueue('peek');

    expect(pseudoQueue.peek()).toEqual('peek');
  });
});
