function generatePalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = ''; // Clear previous colors
  
    for (let i = 0; i < 5; i++) {
      const randomColor = getRandomColor();
  
      const colorCard = document.createElement('div');
      colorCard.className = 'color-card';
      colorCard.onclick = () => copyToClipboard(randomColor);
  
      const colorBox = document.createElement('div');
      colorBox.className = 'color-box';
      colorBox.style.backgroundColor = randomColor;
  
      const colorCode = document.createElement('div');
      colorCode.className = 'color-code';
      colorCode.textContent = randomColor;
  
      colorCard.appendChild(colorBox);
      colorCard.appendChild(colorCode);
      palette.appendChild(colorCard);
    }
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function copyToClipboard(hex) {
    navigator.clipboard.writeText(hex).then(() => {
      const notification = document.getElementById('notification');
      notification.style.display = 'block';
      notification.textContent = `Color ${hex} copied to your clipboard`;
      setTimeout(() => {
        notification.style.display = 'none';
      }, 2000);
    });
  }
  
  // Load initial palette
  generatePalette();
  