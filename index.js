const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("results");
const deleteBtn = document.querySelector(".deletebutton");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "x") { // "x" düğmesi deleteBtn olucak
      deleteLastCharacter();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}

function deleteLastCharacter() {
  const currentValue = inputFieldEl.value;
  if (currentValue.length > 0) {
    inputFieldEl.value = currentValue.slice(0, -1);
  }
}
