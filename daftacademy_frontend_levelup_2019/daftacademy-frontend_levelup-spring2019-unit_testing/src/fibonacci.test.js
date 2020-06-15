const fib = require("./fibonacci");

test("Value is not a number test", () => {
  expect(fib(NaN)).toBeFalsy();
});

test("Should return [0,1,1,2,3] for fib(5)", () => {
  expect(fib(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Should return empty array [] for given parameter 0', () => {
  expect(fib(0)).toEqual([]);
});

test('Should return array with [0] for given parameter 1', () => {
  expect(fib(1)).toEqual([0]);
});

test('Should return array with [0, 1] for given parameter 2', () => {
  expect(fib(2)).toEqual([0, 1]);
});