function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, op, num2) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  }
}
const buffer = document.querySelector(".buffer");
const buffTxt = document.querySelector("#buffer-txt");
const calculator = document.querySelector(".calc-body");
let zero = document.querySelector("#extend");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
const equal = document.querySelector(".equal");
const decimal = document.querySelector("#decimal");
let arrayOfNumbers = [0];
let arrayOfNumbers2 = [0];

function addNum(num) {
  if (arrayOfNumbers[0] === 0) {
    arrayOfNumbers.pop();
  }
  arrayOfNumbers.push(num);
  let fixedArray = arrayOfNumbers.join("");
  buffTxt.textContent = fixedArray;
}
function eventListeners1() {
  zero.addEventListener("click", () => {
    return addNum(0);
  });
  one.addEventListener("click", () => {
    return addNum(1);
  });
  two.addEventListener("click", () => {
    return addNum(2);
  });
  three.addEventListener("click", () => {
    return addNum(3);
  });
  four.addEventListener("click", () => {
    return addNum(4);
  });
  five.addEventListener("click", () => {
    return addNum(5);
  });
  six.addEventListener("click", () => {
    return addNum(6);
  });
  seven.addEventListener("click", () => {
    return addNum(7);
  });
  eight.addEventListener("click", () => {
    return addNum(8);
  });
  nine.addEventListener("click", () => {
    return addNum(9);
  });
}
eventListeners1();
// operators
const addBtn = document.querySelector(".plus");
const subtractBtn = document.querySelector(".subt");
const multiplyBtn = document.querySelector(".times");
const divideBtn = document.querySelector(".divi");
let op = null;

function getOperator(operator) {
  op = operator;
  buffTxt.textContent = "";
}
function getSecondNum(num) {
  if (arrayOfNumbers2[0] === 0) {
    arrayOfNumbers2.pop();
  }
  arrayOfNumbers2.push(num);
  let fixedArray2 = arrayOfNumbers2.join("");
  buffTxt.textContent = fixedArray2;
}
function eventListeners2() {
  zero.addEventListener("click", () => {
    getSecondNum(0);
  });
  one.addEventListener("click", () => {
    getSecondNum(1);
  });
  two.addEventListener("click", () => {
    getSecondNum(2);
  });
  three.addEventListener("click", () => {
    getSecondNum(3);
  });
  four.addEventListener("click", () => {
    getSecondNum(4);
  });
  five.addEventListener("click", () => {
    getSecondNum(5);
  });
  six.addEventListener("click", () => {
    getSecondNum(6);
  });
  seven.addEventListener("click", () => {
    getSecondNum(7);
  });
  eight.addEventListener("click", () => {
    getSecondNum(8);
  });
  nine.addEventListener("click", () => {
    getSecondNum(9);
  });
}
addBtn.addEventListener("click", () => {
  return [getOperator("+"), eventListeners2()];
});
subtractBtn.addEventListener("click", () => {
  return [getOperator("-"), eventListeners2()];
});
multiplyBtn.addEventListener("click", () => {
  return [getOperator("*"), eventListeners2()];
});
divideBtn.addEventListener("click", () => {
  return [getOperator("/"), eventListeners2()];
});
equal.addEventListener("click", () => {
  let num1 = arrayOfNumbers.join("");
  console.log(num1);
  let num2 = arrayOfNumbers2.join("");
  console.log(num2);
  let sum = operate(num1, op, num2);
  console.log(sum);
  buffTxt.textContent = sum;
  eventListeners1();
});
buffer.appendChild(buffTxt);
calculator.append(
  buffer,
  divideBtn,
  seven,
  eight,
  nine,
  multiplyBtn,
  four,
  five,
  six,
  subtractBtn,
  one,
  two,
  three,
  equal,
  addBtn,
  zero,
);
