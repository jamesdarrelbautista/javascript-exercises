const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((prev,current) => prev + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev,current) => prev * current);
};

const power = function(num1,num2) {
  return Math.pow(num1,num2);	
};

const factorial = function(num) {
  if (num == 0 || num == 1) return 1;
  let output = 1;
  for (let index = num; index > 0 ; index--) {
    output *= index;
  }
	return output;
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
