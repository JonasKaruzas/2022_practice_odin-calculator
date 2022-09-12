/**
 * Creates a Calculator object,
 * requires a div with id="container";
 */

class Calculator {
  num1 = "";

  num2 = "";

  operator = "";

  result = 0;

  isFirstNumInput = true;

  constructor() {
    this.createUI();
    this.updateDisplay(0);
  }

  createUI() {
    const container = document.getElementById("container");
    const buttonValues = [
      7,
      8,
      9,
      "/",
      4,
      5,
      6,
      "*",
      1,
      2,
      3,
      "-",
      0,
      ".",
      "=",
      "+",
    ];

    const board = document.createElement("div");
    const display = document.createElement("div");
    board.append(display);

    const clearAllBtn = document.createElement("button");
    clearAllBtn.addEventListener("click", this.clearAllEventHandler);
    board.append(clearAllBtn);

    const clearCurrentBtn = document.createElement("button");
    clearCurrentBtn.addEventListener("click", this.clearCurrentEventHandler);
    board.append(clearCurrentBtn);

    buttonValues.forEach((button) => {
      const buttonElement = document.createElement("button");
      buttonElement.innerText = button;
      buttonElement.addEventListener("click", this.clickHandler);
      board.append(buttonElement);
    });

    clearAllBtn.innerText = "Clear All";
    clearAllBtn.style.gridColumnStart = "span 2";

    clearCurrentBtn.innerText = "Clear Current";
    clearCurrentBtn.style.gridColumnStart = "span 2";

    display.setAttribute("id", "display");
    display.style.backgroundColor = "lightblue";
    display.style.display = "flex";
    display.style.alignItems = "center";
    display.style.justifyContent = "flex-end";
    display.style.gridColumnStart = "span 4";
    display.style.paddingRight = "20px";

    board.style.display = "grid";
    board.style.gridTemplate = "repeat(6, 60px) / repeat(4, 60px)";

    container.append(board);
  }

  clearAllEventHandler = () => {
    this.num1 = "";
    this.num2 = "";
    this.operator = "";
    this.isFirstNumInput = true;
    this.updateDisplay(0);
    console.log(this);
  };

  clearCurrentEventHandler = () => {
    if (this.isFirstNumInput) {
      this.num1 = "";
    } else {
      this.num2 = "";
    }
    this.updateDisplay(0);
    console.log(this);
  };

  updateDisplay = (value) => {
    const display = document.getElementById("display");

    if (!this.operator) {
      display.innerText = value;
    } else {
      display.innerText = `${this.num1} ${this.operator} ${value}`;
    }
  };

  clickHandler = (e) => {
    const value = e.target.innerText;

    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
        this.operator = value;
        this.isFirstNumInput = false;
        this.updateDisplay("");
        console.log(this);
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        this.isFirstNumInput ? (this.num1 += value) : (this.num2 += value);
        this.isFirstNumInput
          ? this.updateDisplay(this.num1)
          : this.updateDisplay(this.num2);

        console.log(this);
        break;
      case "=":
        this.result = this.calculate(this.num1, this.num2, this.operator);
        this.clearAllEventHandler();
        this.updateDisplay(this.result);
        this.num1 = this.result;
        console.log(this);
        break;
      case ".":
        console.log("taskas");
        break;
      default:
        break;
    }
  };

  calculate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        result = parseInt(num1) - parseInt(num2);
        break;
      case "*":
        result = parseInt(num1) * parseInt(num2);
        break;
      case "/":
        result = parseInt(num1) / parseInt(num2);
        break;

      default:
        break;
    }
    return result;
  }
}

const c = new Calculator();
