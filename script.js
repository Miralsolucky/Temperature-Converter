// Select elements
const temperatureInput = document.getElementById('temperatureInput');
const unitSelect = document.getElementById('unitSelect');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

// Conversion logic
function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let result = '';
  switch (unit) {
    case 'celsius':
      result = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F | Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
      break;
    case 'fahrenheit':
      result = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C | Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
      break;
    case 'kelvin':
      result = `Celsius: ${(temperature - 273.15).toFixed(2)}°C | Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
      break;
    default:
      result = "Invalid unit!";
  }

  resultDiv.textContent = result;
}

// Add event listener
convertButton.addEventListener('click', convertTemperature);