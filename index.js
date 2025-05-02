const buttons = document.querySelectorAll(".btn-js");

let input = document.querySelector("#input-js");

let inputValue = input.value;

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const inputBtn = button.innerHTML;

    expression += inputBtn;
    input.value = expression;

    console.log(expression);

    if (inputBtn === "=") {
      inputValue = math.evaluate(expression.slice(0, -1));
      console.log(inputValue);
      input.value = inputValue;
      expression = "";
    }

    if (inputBtn === "AC") {
      expression = "";
      input.value = "";
    }
  });
});
