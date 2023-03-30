var tempInput = document.getElementById("temp-input");
var conversionType = document.getElementById("conversion-type");
var convertButton = document.getElementById("convert-button");
var resultDiv = document.getElementById("result");

convertButton.addEventListener("click", function() {
	var temperature = parseFloat(tempInput.value);
	if (isNaN(temperature)) {
		resultDiv.innerText = "Invalid input";
	} else {
		if (conversionType.value === "celsius_to_fahrenheit") {
			var result = temperature * 9/5 + 32;
			resultDiv.innerText = temperature + " Celsius is " + result + " Fahrenheit";
		} else if (conversionType.value === "fahrenheit_to_celsius") {
			var result = (temperature - 32) * 5/9;
			resultDiv.innerText = temperature + " Fahrenheit is " + result + " Celsius";
		}
	}
});
