const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    let availableChars = "";
    if (useUppercase) availableChars += upperCaseChars;
    if (useLowercase) availableChars += lowerCaseChars;
    if (useNumbers) availableChars += numberChars;
    if (useSymbols) availableChars += symbolChars;

    // Default fallback
    if (availableChars === "") {
        availableChars = upperCaseChars;
    }

    const passwordLength = 12;
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars[randomIndex];
    }

    document.getElementById("password").value = generatedPassword;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    const copyButton = document.querySelector(".copy-btn");

    navigator.clipboard.writeText(passwordField.value).then(() => {
        copyButton.innerHTML = `<i class="fa-solid fa-check"></i> Copied Password`;
        setTimeout(() => {
            copyButton.innerHTML = `<i class="fa-solid fa-copy"></i> Copy Password`;
        }, 2000);
    });
}

window.onload = generatePassword;