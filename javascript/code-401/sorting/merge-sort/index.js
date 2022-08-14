'use strict';

function mergeSort(arr) {

  let n = arr.length;
  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = [];
    let right = [];
    for (let i = 0; i < mid; i++) {
      left.push(arr[i]);
    }
    for (let i = mid; i < arr.length; i++) {
      right.push(arr[i]);
    }
    let sortLeft = left.sort((a, b) => {
      return (a - b);
    });
    let sortRight = right.sort((a, b) => {
      return a - b;
    });
    return merge(sortLeft, sortRight, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  arr = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j] || left[i] === right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i === left.length) {
    while (j < right.length) {
      arr.push(right[j]);
      j++;
    }
  } else {
    while (i < left.length) {
      arr.push(left[i]);
      i++;
    }
  }
  console.log(arr);
  return arr;
}

let array = [8, 4, 23, 42, 16, 15];
mergeSort(array);

module.exports = {
  merge,
  mergeSort,
};
