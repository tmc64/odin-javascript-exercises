const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  if (array.length === 0) {
    return sumValue = 0
  } else {
	return sumValue = array.reduce((sumValue, currentValue) => {
    return sumValue + currentValue
  })}
};

const multiply = function(array) {
  if (array.length === 0) {
    return multValue = 0
  } else {
	return multValue = array.reduce((multValue, currentValue) => {
    return multValue * currentValue
  })}
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(x) {
  let result = 1
  for (let i = x; i > 0; i--) {
    result = result * i
  }
	return result
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
