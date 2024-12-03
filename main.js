import { convertToBraille, convertToSinhalaFromBraille } from './logic.js';

// Add event listener for Sinhala to Braille conversion
document.getElementById("convertButton").addEventListener("click", () => {
    const sinhalaInput = document.getElementById("sinhalaInput").value;
    const brailleOutput = convertToBraille(sinhalaInput);
    document.getElementById("brailleOutput").innerText = brailleOutput;
});

// Add event listener for Braille to Sinhala conversion
document.getElementById("reverseConvertButton").addEventListener("click", () => {
    const brailleInput = document.getElementById("brailleInput").value;
    const sinhalaOutput = convertToSinhalaFromBraille(brailleInput);
    document.getElementById("sinhalaOutput").innerText = sinhalaOutput;
});
