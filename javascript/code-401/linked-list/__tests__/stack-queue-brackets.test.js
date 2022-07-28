'use strict';

const validateBrackets = require('../stack-queue-brackets');

describe('Validate Brackets Tests', () => {
  test('Returns true if given the string \'{}\'', () => {
    let result = validateBrackets('{}');

    expect(result).toEqual(true);
  });

  test('Ignores non-bracket characters', () => {
    let result = validateBrackets('()[[Extra Characters]]');

    expect(result).toEqual(true);
  });

  test('Return false if given the string \'{(})\'', () => {
    let result = validateBrackets('{(})');

    expect(result).toEqual(false);
  });
});
