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
let num1 = "";
let num2 = "";
let operator = "";
let sum = "";
const buffTxt = document.querySelector("#buffer-txt");
function addNum(num) {
  if (!operator) {
    num1 += num;
    buffTxt.textContent = num1;
  } else if (sum !== "") {
    num1 += num;
    buffTxt.textContent = num1;
  } else if (num1 === "" && sum !== "" && num2 === "") {
    num2 += num;
    buffTxt.textContent = num2;
  } else {
    num2 += num;
    buffTxt.textContent = num2;
  }
}
const zero = document.querySelector("#extend").addEventListener("click", () => {
  return addNum(0), decimalCheck();
});
const one = document.querySelector("#one").addEventListener("click", () => {
  return [addNum(1)];
});
const two = document.querySelector("#two").addEventListener("click", () => {
  return [addNum(2)];
});
const three = document.querySelector("#three").addEventListener("click", () => {
  return [addNum(3)];
});
const four = document.querySelector("#four").addEventListener("click", () => {
  return [addNum(4)];
});
const five = document.querySelector("#five").addEventListener("click", () => {
  return [addNum(5)];
});
const six = document.querySelector("#six").addEventListener("click", () => {
  return [addNum(6)];
});
const seven = document.querySelector("#seven").addEventListener("click", () => {
  return [addNum(7)];
});
const eight = document.querySelector("#eight").addEventListener("click", () => {
  return [addNum(8)];
});
const nine = document.querySelector("#nine").addEventListener("click", () => {
  return [addNum(9)];
});
function getOperator(op) {
  if (sum === "") {
    operator += op;
    buffTxt.textContent = num2;
  } else if (sum !== "") {
    operator += op;
    buffTxt.textContent = num1;
  }
  if (operator.length > 1) {
    if (sum === "") {
      let newNum1 = parseInt(num1);
      let newNum2 = parseInt(num2);
      sum = operate(newNum1, operator[0], newNum2);
      num1 = "";
      num2 = "";
      buffTxt.textContent = sum;
    } else if (sum !== "") {
      let newNum1 = parseInt(num1);
      sum = operate(sum, operator[operator.length - 2], newNum1);
      buffTxt.textContent = sum;
    }
  }
}
const addBtn = document.querySelector(".plus").addEventListener("click", () => {
  return [getOperator("+")];
});
const subBtn = document.querySelector(".subt").addEventListener("click", () => {
  return [getOperator("-")];
});
const multiplybtn = document
  .querySelector(".times")
  .addEventListener("click", () => {
    return getOperator("*");
  });
const divBtn = document.querySelector(".divi").addEventListener("click", () => {
  return [getOperator("/")];
});

const equal = document.querySelector(".equal").addEventListener("click", () => {
  if (sum === "") {
    let newNum1 = parseFloat(num1);
    let newNum2 = parseFloat(num2);
    num1 = "";
    num2 = "";
    sum = operate(newNum1, operator, newNum2);
    Math.round(sum * 10) / 10;
    buffTxt.textContent = sum;
    operator = "";
  } else if (sum !== "" && operator.length === 1) {
    let newNum1 = parseFloat(num1);
    num1 = "";
    sum = operate(newNum1, operator, sum);
    Math.round(sum * 10) / 10;
    console.log(sum);
    operator = "";
    buffTxt.textContent = sum;
  } else if (operator.length > 1) {
    let newNum1 = parseFloat(num1);
    sum = operate(sum, operator[operator.length - 1], newNum1);
    Math.round(sum * 10) / 10;
    buffTxt.textContent = sum;
  } else if (operator == "" || num2 == "" || sum == "" || num1 == "") {
    buffTxt.textContent = "ERROR";
    num1 = "";
    num2 = "";
    operator = "";
    sum = "";
  }
});

const clear = document.querySelector("#clear").addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  sum = "";
  buffTxt.textContent = 0;
});
const backspace = document
  .querySelector("#del")
  .addEventListener("click", () => {
    if (sum === "" && operator !== "") {
      num2 = num2.slice(0, -1);
      buffTxt.textContent = num2;
    } else if (
      (sum !== "" && operator !== "") ||
      (sum === "" && operator === "")
    ) {
      num1 = num1.slice(0, -1);
      buffTxt.textContent = num1;
    }
  });
