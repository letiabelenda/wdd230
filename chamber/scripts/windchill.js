

  const temperatureElement = document.querySelector(".temperature");
  const windSpeedElement = document.querySelector(".wind-speed");
  const windChillElement = document.querySelector(".wind-chill");
  
  const currentTemperature = parseFloat(temperatureElement.textContent);
  const currentWindSpeed = parseFloat(windSpeedElement.textContent);
  
  // Calculate wind chill
  const windChill = calculateWindChill(currentTemperature, currentWindSpeed);
  
  // Display temperature, wind speed and wind chill values in the weather section
  temperatureElement.textContent = `Temperature: ${currentTemperature}°F`;
  windSpeedElement.textContent = `Wind Speed: ${currentWindSpeed} mph`;
  windChillElement.textContent = `Wind Chill: ${windChill}`;

  // Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature and wind speed meet the requirements
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate wind chill using the formula
      const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      return Math.round(windChill) + "°F";
    } else {
      return "N/A";
    }
  }
