function add(...args) {
  let sum = 0;
  for (arg of args) {
    sum += arg;
  }
  return sum;
}

function subtract(a, ...args) {
  let result = a;
  for (arg of args) {
    result -= arg;
  }
  return result;
}

function multiply(...args) {
  let result = 1;
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

let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(firstNumber, operator, secondNumber) {
  let result;
  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "x":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
  }
  return result;
}

console.log(operate(3, "-", 7));

let digits = document.querySelectorAll(".btn.digit");
let display = document.querySelector(".display p");
let signs = document.querySelectorAll(".btn.operator");
let curInput = "first";

for (digit of digits) {
  digit.addEventListener("click", function () {
    if (curInput === "first") {
      firstNumber += this.textContent;
    } else {
      secondNumber += this.textContent;
    }
    display.textContent = firstNumber + operator + secondNumber;
  });
}

for (sign of signs) {
  sign.addEventListener("click", function () {
    operator = this.textContent;
    curInput = curInput === "first" ? "second" : "first";
    display.textContent = firstNumber + operator + secondNumber;
  });
}

let deleteBtn = document.querySelector(".numpad > .btn.action");
let acBtn = document.querySelector(".result > .btn.action");

deleteBtn.addEventListener("click", () => {
    if (curInput === "first") {
      firstNumber = firstNumber.slice(0, -1);
    } else {
     secondNumber = secondNumber.slice(0, -1);
    }
    display.textContent = firstNumber + operator + secondNumber;
});

acBtn.addEventListener("click", () => {
  display.textContent = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
  curInput = "first";
});

let equalBtn = document.querySelector(".result > .btn.equals");

equalBtn.addEventListener("click", () => {
  let result = operate(Number(firstNumber), operator, Number(secondNumber));
  console.log(result);
  display.textContent = result;
  firstNumber = "";
  operator = "";
  secondNumber = "";
  curInput = "first";
});
