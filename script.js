/**
 * Creates a Calculator object,
 * requires a div with id="container";
 */

class Calculator {
  num1 = 0;

  num2 = 0;

  operator;

  result = 0;

  constructor() {
    this.createUI();
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

    buttonValues.forEach((button) => {
      const buttonElement = document.createElement("button");
      buttonElement.innerText = button;
      buttonElement.addEventListener("click", this.clickHandler);
      board.append(buttonElement);
    });

    display.setAttribute("id", "display");
    display.style.backgroundColor = "lightblue";
    display.style.gridColumnStart = "span 4";

    board.style.display = "grid";
    board.style.gridTemplate = "repeat(5, 60px) / repeat(4, 60px)";

    container.append(board);
  }

  updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = "kuku";
  }

  clickHandler(e) {
    console.log(e.target.innerText);
    updateDisplay();
  }

  sum() {
    return this.num1 + this.num2;
  }
}

const c = new Calculator();
// c.updateDisplay();
