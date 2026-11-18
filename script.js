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

function multiple(...args) {
  let result = 0;
  for (arg of args) {
    result *= arg;
  }
  return result;
}

function divide(a , ...args) {
  let result = a;
  for (arg of args) {
    result /= arg;
  }
  return result;
}

