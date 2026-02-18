// 06-array-methods.js

// 1. Use map to create a new array with the numbers doubled
function doubleNumbers(arr) {
  return arr.map(a => a * 2);
};

// 2. Use filter to return only even numbers
function filterEven(arr) {
  return arr.filter(a => a % 2 === 0);
};

module.exports = {
  doubleNumbers,
  filterEven
};
