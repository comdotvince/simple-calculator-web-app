let expression = "";
let resultShown = false;

const input = document.querySelector("#input-js");
const buttons = document.querySelectorAll(".btn-js");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerHTML;

    if (val === "AC") {
      expression = "";
      input.value = "0";
      resultShown = false;
    } else if (val === "=") {
      try {
        expression = math.evaluate(expression).toString();
        input.value = expression;
        resultShown = true;
      } catch {
        input.value = "Error";
        expression = "";
      }
    } else if (val === "+/-") {
      // Flip the sign of last number
      const match = expression.match(/(-?\d+\.?\d*)$/);
      if (match) {
        const num = match[0];
        const flipped = (-parseFloat(num)).toString();
        expression = expression.slice(0, -num.length) + flipped;
        input.value = expression;
      }
    } else {
      // If result was just shown, start new expression
      if (resultShown && /[0-9.]/.test(val)) {
        expression = val;
      } else {
        expression += val;
      }
      input.value = expression;
      resultShown = false;
    }
  });
});
