import { sinhalaToBraille, brailleToSinhala } from './mappings.js';

// Function to convert Sinhala to Braille
export function convertToBraille(text) {
    let output = "";
    let i = 0;
    while (i < text.length) {
        let char = text[i];
        let nextChar = text[i + 1];

        // Check for combined characters
        if (nextChar && sinhalaToBraille[char + nextChar]) {
            output += sinhalaToBraille[char + nextChar];
            i += 2; // Skip next character
        } else {
            output += sinhalaToBraille[char] || "⠿"; // Unknown characters default to ⠿
            i++;
        }
    }
    return output;
}

// Function to convert Braille to Sinhala
export function convertToSinhalaFromBraille(brailleText) {
    let output = "";
    let i = 0;
    while (i < brailleText.length) {
        let char = brailleText[i];
        let nextChar = brailleText[i + 1];

        // Check for combined characters
        if (nextChar && brailleToSinhala[char + nextChar]) {
            output += brailleToSinhala[char + nextChar];
            i += 2; // Skip next character
        } else {
            output += brailleToSinhala[char] || "?"; // Unknown characters default to '?'
            i++;
        }
    }
    return output;
}
