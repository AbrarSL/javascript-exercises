const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(numbers) {
  return numbers.reduce((totalSum, number) => totalSum += number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((totalProd, number) => totalProd *= number, 1);
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;

  return factorial(a - 1) * a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
