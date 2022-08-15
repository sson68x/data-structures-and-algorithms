'use strict';

const { HashTable } = require('./index');


describe('Hashtable Tests', () => {
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    let table = new HashTable(1024);
    table.set('Simon', 31);
    let results = table.get('Simon');

    expect(results).toEqual(31);
  });

  test('Retrieving based on a key returns the value stored', () => {
    let table = new HashTable(1024);
    table.set('Simon', 31);
    table.set('Jena', 31);
    let key = 'Jena';
    let results = table.get(key);

    expect(results).toEqual(31);
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let table = new HashTable(1024);
    table.set('Simon', 31);
    let results = table.contains('Mike');

    expect(results).toEqual(false);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let table = new HashTable(1024);
    table.set('Simon', 31);
    table.set('Jena', 31);
    let results = table.keys();

    expect(results).toContainEqual(['Jena'], ['Simon']);
  });

  // Successfully handle a collision within the hashtable

  // Successfully retrieve a value from a bucket within the hashtable that has a collision

  test('Successfully hash a key to an in-range value', () => {
    let table = new HashTable(1024);
    let hash = table.hash('Simon');

    expect(hash).toEqual(168);
  });

  test('Successfully identifies repeated word', () => {
    let string = 'Once upon a time, there was a brave princess who...';
    let word = repeatedWord(string);

    expect(word).toEqual('a');

  });

});
