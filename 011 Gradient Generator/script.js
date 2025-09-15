const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const generateBtn = document.getElementById("generateBtn");
const gradientBox = document.getElementById("gradientBox");
const cssCode = document.getElementById("cssCode");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  gradientBox.style.background = gradient;
  cssCode.value = `background: ${gradient};`;
});

copyBtn.addEventListener("click", () => {
  cssCode.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy Code"), 1500);
});
