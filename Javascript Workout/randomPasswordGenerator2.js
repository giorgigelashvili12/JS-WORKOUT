// RANDOM PASSWORD GENERATOR 2
function generatePassword(length, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0) {
        return `passowrd lenth must be atleast 1.`;
    }
    if(allowedChars.length === 0) {
        return `At least 1 character has to be selected.`;
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return ``
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeSymbols = true;
const includeNumbers = true;

generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers);
console.log(`Generated password: ${password}`);