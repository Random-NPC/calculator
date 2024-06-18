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
let equal = document.querySelector(".equal");
const decimal = document.querySelector("#decimal");
let arrayOfNumbers = [0];
let arrayOfNumbers2 = [0];

function addNum(num) {
  if (arrayOfNumbers[0] === 0 || arrayOfNumbers2[0] === 0) {
    arrayOfNumbers.pop();
    arrayOfNumbers2.pop();
  }
  arrayOfNumbers.push(num);
  let fixedArray = arrayOfNumbers.join("");
  buffTxt.textContent = fixedArray;
}

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
// operators
const addBtn = document.querySelector(".plus");
const subtractBtn = document.querySelector(".subt");
const multiplyBtn = document.querySelector(".times");
const divideBtn = document.querySelector(".divi");
let op = null;
function getOperator(operator) {
  op = operator;
  let num1 = arrayOfNumbers.join("");
  buffTxt.textContent = "";
}
addBtn.addEventListener("click", () => {
  return getOperator("+");
});
subtractBtn.addEventListener("click", () => {
  return getOperator("-");
});
multiplyBtn.addEventListener("click", () => {
  return getOperator("*");
});
divideBtn.addEventListener("click", () => {
  return getOperator("/");
});

function getSecondNum(num) {}
buffer.appendChild(buffTxt);
calculator.appendChild(buffer);
calculator.appendChild(divideBtn);
calculator.appendChild(seven);
calculator.appendChild(eight);
calculator.appendChild(nine);
calculator.appendChild(multiplyBtn);
calculator.appendChild(four);
calculator.appendChild(five);
calculator.appendChild(six);
calculator.appendChild(subtractBtn);
calculator.appendChild(one);
calculator.appendChild(two);
calculator.appendChild(three);
calculator.appendChild(equal);
calculator.appendChild(addBtn);
calculator.appendChild(zero);
