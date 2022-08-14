'use strict';

const { merge, mergeSort } = require('./index');

describe('Merge-Sort Tests', () => {

  test('Merges and sorts input array correctly', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let results = mergeSort(array);
    console.log(results);

    expect(results[0]).toEqual(4);
    expect(results[5]).toEqual(42);
  });

  test('Returns number of elements in array', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let results = mergeSort(array);
    expect(results.length).toEqual(6);
  });

});
