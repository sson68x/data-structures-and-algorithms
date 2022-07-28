'use strict';

const {} = require('../linked-list/linked-lists');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();

      bucket.add(data);

      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];

      let value = bucket.head.value[key];
      return value;
    }
  }

  contains(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head;

      while (current) {
        if (current.value === key) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  keys() {
    let keyCollection = [];

    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        let bucket = this.buckets[i];
        let current = bucket.head;

        while (current) {
          keyCollection.push(Object.keys(current.value));
          current = current.next;
        }
      }
    }
    return keyCollection;
  }
}

// let table = new HashTable(1024);

// console.log(table);
// console.log(table.hash('Simon'));
// table.set('Simon', 31);
// table.set('Jena', 31);
// table.set('Ryan', { name: 'Ryan' });
// console.log(table);
// console.log('Simon', table.get('Simon'));
// console.log('Ryan', table.get('Ryan'));

module.exports = {
  HashTable,
};
