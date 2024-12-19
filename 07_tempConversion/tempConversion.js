const convertToCelsius = function(f) {
  let converted = (f-32)* 5/9
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(c) {
  let converted = c*9/5 + 32
  return Math.round(converted * 10) / 10;
};
convertToCelsius(100) // fahrenheit to celsius, should return 0

convertToFahrenheit(1) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
