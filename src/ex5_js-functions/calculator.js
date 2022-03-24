function Calculator() {
  let currentValue = 0;
  return {
    add: function add(addValue) {
      currentValue += addValue;
      return add;
    },
    subtract: function subtract(subValue) {
      currentValue -= subValue;
      return subtract;
    },
    divide: function divide(divValue) {
      if (divValue !== 0) {
        currentValue /= divValue;
        return divide;
      }
      return 'Деление на 0!';
    },
    multiply: function multiply(multValue) {
      currentValue *= multValue;
      return multiply;
    },
    getResult: function getResult() {
      return currentValue;
    },
    reset: function reset() {
      currentValue = 0;
    },
  };
}

const calculator = Calculator();

module.exports = calculator;
