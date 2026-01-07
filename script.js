const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/".split("");
const numbersToggle = document.getElementById("toggle-numbers");
const symbolsToggle = document.getElementById("toggle-symbols");
let generateButton = document.getElementById("generate-button");
let passwordOneEl = document.getElementById("passwordOne");
let passwordTwoEl = document.getElementById("passwordTwo");
const slider = document.getElementById("range-slider");
const display = document.getElementById("value-display");
let passwordLength = slider.value;

generateButton.addEventListener("click", function () {
  passwordOneEl.textContent = generateRandomPassword();
  passwordTwoEl.textContent = generateRandomPassword();
});

passwordOneEl.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordOneEl.textContent);
  alert("Text Copied!");
});

passwordTwoEl.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordTwoEl.textContent);
});

function generateRandomPassword() {
  let pool = [...letters];
  if (numbersToggle.checked) pool = pool.concat(numbers);
  if (symbolsToggle.checked) pool = pool.concat(symbols);
  let randomPassword = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    randomPassword += pool[randomIndex];
  }
  return randomPassword;
}

slider.addEventListener("input", function () {
  passwordLength = this.value;
  display.textContent = passwordLength;
});
// let generateEl = document.querySelector("#generate");
// let passwordOneEl = document.querySelector("#passwordOne");
// let passwordTwoEl = document.querySelector("#passwordTwo");
// let passwordLength = 12;
// let isClicked = false;

// function getRandomCharacter() {
//   let randomChar = Math.floor(Math.random() * characters.length);
//   return characters[randomChar];
// }

// function generatePassword() {
//   isClicked = true;
//   passwordOneEl.textContent = render();
//   passwordTwoEl.textContent = render();
// }

// function render() {
//   if (isClicked === true) {
//     let randomPassword = "";
//     for (i = 0; i < passwordLength; i++) {
//       randomPassword += getRandomCharacter();
//     }
//     return randomPassword;
//   }
// }
