function calculateBMI() {
  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;

  let bmi = weight / (height * height);
  let result = document.getElementById("result");

  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  result.innerText = `BMI: ${bmi.toFixed(2)} (${category})`;
}