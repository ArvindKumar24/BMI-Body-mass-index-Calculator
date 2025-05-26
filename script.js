function calculateBMI() {
  const unit = document.getElementById('unit').value;
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || weight <= 0) {
    resultDiv.innerHTML = "<span style='color: red;'>Please enter a valid weight.</span>";
    weightInput.focus();
    return;
  }

  if (isNaN(height) || height <= 0) {
    resultDiv.innerHTML = "<span style='color: red;'>Please enter a valid height.</span>";
    heightInput.focus();
    return;
  }

  let bmi;
  if (unit === 'metric') {
    bmi = weight / ((height / 100) ** 2);
  } else {
    bmi = (weight / (height * height)) * 703;
  }

  bmi = bmi.toFixed(1);
  let status;

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal weight";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> - <strong>${status}</strong>`;
}