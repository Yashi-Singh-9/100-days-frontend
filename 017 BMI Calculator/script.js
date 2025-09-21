const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultDiv = document.getElementById('result');
const sliderFill = document.getElementById('sliderFill');

heightInput.addEventListener('input', calculateBMI);
weightInput.addEventListener('input', calculateBMI);

function calculateBMI() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = "Enter your height and weight";
    sliderFill.style.width = "0%";
    sliderFill.style.background = "#ddd";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters ** 2)).toFixed(1);

  let category = "";
  let fillPercent = 0;
  let fillColor = "";

  if (bmi < 18.5) {
    category = "Underweight";
    fillPercent = 25;
    fillColor = "#FF9800";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    fillPercent = 50;
    fillColor = "#4CAF50";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    fillPercent = 75;
    fillColor = "#FF5722";
  } else {
    category = "Obese";
    fillPercent = 100;
    fillColor = "#F44336";
  }

  resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> — <span style="color:${fillColor}">${category}</span>`;
  sliderFill.style.width = `${fillPercent}%`;
  sliderFill.style.background = fillColor; // <-- this makes sure the color changes properly
}
