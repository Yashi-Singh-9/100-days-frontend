function generateQRCode() {
  const qrCodeContainer = document.getElementById('qrcode');
  const message = document.getElementById('message');
  const text = document.getElementById('text').value.trim();
  const copyButton = document.querySelector('.copy');

  qrCodeContainer.innerHTML = '';
  message.innerHTML = '';
  copyButton.textContent = 'Copy';

  if (text === '') {
      message.innerHTML = '⚠️ Please enter some text or a URL.';
      return;
  }

  // Create QR code
  const qr = new QRCode(qrCodeContainer, {
      text: text,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
  });
}

document.querySelector('.copy').addEventListener('click', async () => {
  const img = document.querySelector('#qrcode img');

  if (!img) {
      document.getElementById('message').innerHTML = '⚠️ Generate a QR code first.';
      return;
  }

  try {
      // Fetch the image and convert it to a blob
      const response = await fetch(img.src);
      const blob = await response.blob();
      const item = new ClipboardItem({ [blob.type]: blob });

      await navigator.clipboard.write([item]);

      const copyButton = document.querySelector('.copy');
      copyButton.textContent = 'Copied!';

      // Change back to "Copy" after 1 second
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 1000);

  } catch (err) {
      console.error('Failed to copy QR code:', err);
      document.getElementById('message').innerHTML = '❌ Failed to copy QR code.';
  }
});
