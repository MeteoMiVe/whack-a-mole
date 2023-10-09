import { generateRandomNumber, generateRandomNumberFromPrevious } from './numbers';

/**
 * generateRandomNumber tests
 */

// Check if the number is within default range (0-11)
test('generateRandomNumber within default range', () => {
  const number = generateRandomNumber();

  expect(number).toBeGreaterThanOrEqual(0);
  expect(number).toBeLessThanOrEqual(11);
});

// Check if the number is within specified range
test('generateRandomNumber within specified range', () => {
  const min = 2;
  const max = 11;

  const number = generateRandomNumber(min, max);

  expect(number).toBeGreaterThanOrEqual(min);
  expect(number).toBeLessThanOrEqual(max);
});

// Check if the number is within specified range when min is negative
test('generateRandomNumber within specified range with negative min', () => {
  const min = -5;
  const max = 5;

  const number = generateRandomNumber(min, max);

  expect(number).toBeGreaterThanOrEqual(min);
  expect(number).toBeLessThanOrEqual(max);
});

// Check if the number is within specified range when min is negative and max is negative
test('generateRandomNumber within specified range with min and max negative', () => {
  const min = -7;
  const max = -1;

  const number = generateRandomNumber(min, max);

  expect(number).toBeGreaterThanOrEqual(min);
  expect(number).toBeLessThanOrEqual(max);
});

// Check if the number is equal to min and max when min and max are the same
test('generateRandomNumber when min and max are the same', () => {
  const min = 8;
  const max = 8;

  const number = generateRandomNumber(min, max);

  expect(number).toBe(min);
  expect(number).toBe(max);
});

/**
 * generateRandomNumberFromPrevious test
 */

// Check if the previous number is never returned
test('generateRandomNumberFromPrevious should never return the previous number', () => {
  let previousNumber = 1;
  const min = 0;
  const max = 11;
  const iterations = 100;

  for (let i = 0; i < iterations; i++) {
    const newNumber = generateRandomNumberFromPrevious(previousNumber, min, max);
    const previousBackup = previousNumber;
    previousNumber = newNumber;

    expect(newNumber).not.toBe(previousBackup);
  }
});
