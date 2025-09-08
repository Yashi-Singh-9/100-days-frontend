const textarea = document.getElementById("word-count");
const wordResult = document.querySelector(".word-result");
const charTotal = document.querySelector(".characters-result"); // Total characters (with spaces)
const charWithoutSpaces = document.querySelectorAll(".characters-results")[0];
const charWithSpaces = document.querySelectorAll(".characters-results")[1];

function countTextStats(text) {
    const trimmedText = text.trim();
    const wordCount = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
    const charCountWithSpaces = text.length;
    const charCountWithoutSpaces = text.replace(/\s/g, "").length;

    wordResult.textContent = wordCount;
    charTotal.textContent = charCountWithSpaces; // For "Characters"
    charWithSpaces.textContent = charCountWithSpaces; // "Characters (with spaces)"
    charWithoutSpaces.textContent = charCountWithoutSpaces; // "Characters (without spaces)"
}

textarea.addEventListener("input", () => {
    countTextStats(textarea.value);
});

// Initialize on page load
countTextStats("");