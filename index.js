import "./modes.js";
import modes from "./modes.js";

const colorPicker = document.getElementById("color-picker");
const submitColorBtn = document.getElementById("submit-color");
const modePicker = document.getElementById("mode-picker");
const colorSchemeEl = document.getElementById("color-scheme");
let colorCount = 5;

// Event Listeners

submitColorBtn.addEventListener("click", renderColorScheme);

// Functions

function renderColorScheme() {
  const hexColor = colorPicker.value.replace("#", "");
  const mode = document.getElementById("mode-picker").value;
  const count = colorCount;

  let fetchUrl = `
    https://www.thecolorapi.com/scheme?hex=${hexColor}}&mode=${mode}&${count}=6
    `;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((colorScheme) => {
      let colorSchemeArr = colorScheme.colors;
      let colorSchemeHtml = "";

      colorSchemeArr.forEach((color) => {
        console.log(color.hex.value);
        colorSchemeHtml += `
              <p class="color" style="background-color: ${color.hex.value}">
        `;
        colorSchemeEl.innerHTML = colorSchemeHtml;
      });
    });
}

function renderSelectOptions() {
  modes.forEach((modeText) => {
    const option = document.createElement("option");
    option.text = modeText;
    document.getElementById("mode-picker").appendChild(option);
  });
}

renderSelectOptions();
renderColorScheme();
