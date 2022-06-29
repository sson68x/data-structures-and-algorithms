'use strict';

// Require our linked list implementation
const { LinkedList, Node } = require('../linked-list');


describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  let list = new LinkedList();

  test('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull;
  });

  test('Can properly insert into the linked list', () => {
    list.insert(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next).toBeNull();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let expected = list.head.value;
    expect(list.head.value).toEqual(expected);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    list.insert(5);
    list.insert(7)

    expect(list.head.value).toEqual(7);
    expect(list.head.next.value).toEqual(5);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull;
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let result = list.includes(3);
    expect(result).toBeTruthy();
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let anotherResult = list.includes('not included');

    expect(anotherResult).toBeFalsy();
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let str = list.toString();
    let expected = '{ 7 } -> { 5 } -> { 3 } -> NULL';

    expect(str).toEqual(expected);
  });
});
