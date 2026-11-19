function add(...args) {
  let sum = 0;
  for (arg of args) {
    sum += arg;
  }
  return sum;
}

function substract(a, ...args) {
  let result = a;
  for (arg of args) {
    result -= arg;
  }
  return result;
}

function multiply(...args) {
  let result = 0;
  for (arg of args) {
    result *= arg;
  }
  return result;
}

function divide(a, ...args) {
  let result = a;
  for (arg of args) {
    result /= arg;
  }
  return result;
}

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      substract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
  }
}
