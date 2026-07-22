const add = function(o,t) {
  return o+t;
};

const subtract = function(o,t) {
	return o-t;
};

const sum = function(numbers) {
  return numbers.reduce((total, num) => total + Number(num), 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * Number(num), 1);
};

const power = function(o,t) {
	return o**t;
};

const factorial = function(n) {
	if (n<0){
    return "ERROR"
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
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
