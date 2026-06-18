const category = document.getElementById("category");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputValue = document.getElementById("inputValue");
const result = document.getElementById("result");

const units = {
  length: ["km", "m", "cm"],
  temperature: ["c", "f"],
  weight: ["kg", "g"]
};

// Populate units
function loadUnits() {
  const selected = category.value;
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  units[selected].forEach(unit => {
    fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
  });
}

// Conversion logic
function convert() {
  const val = parseFloat(inputValue.value);
  if (isNaN(val)) return;

  const from = fromUnit.value;
  const to = toUnit.value;
  let res;

  // LENGTH
  if (category.value === "length") {
    const inMeters = {
      km: val * 1000,
      m: val,
      cm: val / 100
    };

    res = inMeters[from];

    if (to === "km") res /= 1000;
    if (to === "cm") res *= 100;
  }

  // TEMPERATURE
  if (category.value === "temperature") {
    if (from === "c" && to === "f") res = (val * 9/5) + 32;
    else if (from === "f" && to === "c") res = (val - 32) * 5/9;
    else res = val;
  }

  // WEIGHT
  if (category.value === "weight") {
    const inKg = {
      kg: val,
      g: val / 1000
    };

    res = inKg[from];

    if (to === "g") res *= 1000;
  }

  result.innerText = "Result: " + res;
}

// Events
category.addEventListener("change", loadUnits);
inputValue.addEventListener("input", convert);
fromUnit.addEventListener("change", convert);
toUnit.addEventListener("change", convert);

// Initial load
loadUnits();